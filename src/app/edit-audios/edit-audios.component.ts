import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-audios',
  templateUrl: './edit-audios.component.html',
  styleUrls: ['./edit-audios.component.css']
})
export class EditAudiosComponent implements OnInit {
  
  successMessage!:any;
  trackid:any;
  editForm!: FormGroup;
  values:any
  constructor(private _myservice :MyserviceService,private router:Router, private route: ActivatedRoute ) { 
   
   }

  ngOnInit(): void {
    this.trackid = this.route.snapshot.queryParamMap.get('id')
    console.log(this.trackid);
    this._myservice.userViewOneAudio(this.trackid).subscribe(res=>{
      console.log( "res",res);
      this.values=res;
      console.log(this.values.title)
      
      this.editForm = new FormGroup({
        title : new FormControl(this.values.title),
        category : new FormControl(this.values.category),
        author : new FormControl(this.values.author),
        image :  new FormControl(this.values.image)
      })
      console.log(this.editForm.value)
     
    })
 
  }

  isValid(controlName:any){
    return this.editForm.get(controlName)?.invalid && this.editForm.get(controlName)?.touched;
  }

  edit(){
    console.log(this.editForm)
    this._myservice.updateAudio(this.trackid,this.editForm.value).subscribe(data=>{
      this.successMessage='update success';
      console.log(this.successMessage)
      console.log(data)
      this.router.navigate(['audiolist'])
      
    })
    // this.editForm.reset();
   
    
  

  }

}

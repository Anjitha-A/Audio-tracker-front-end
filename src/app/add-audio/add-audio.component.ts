import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-audio',
  templateUrl: './add-audio.component.html',
  styleUrls: ['./add-audio.component.css']
})
export class AddAudioComponent implements OnInit {
  addForm : FormGroup;
  successMessage!:any;

  constructor(private _myservice :MyserviceService,private router:Router) {
    this.addForm= new FormGroup({
     
      title : new FormControl(null, Validators.required),
      category : new FormControl(null, Validators.required),
      author : new FormControl(null, Validators.required),
      image :  new FormControl(null, Validators.required)
    })
   }

  ngOnInit(): void {
  }



  isValid(controlName:any){
    return this.addForm.get(controlName)?.invalid && this.addForm.get(controlName)?.touched;
  }



  addtoForm(){
    this._myservice.addToForm(this.addForm.value)
    .subscribe(
      data =>{
        console.log(data)
         this.successMessage = "adding new audio is successfull"
         this.router.navigate(['audiolist'])
         
     },
     error=>{
       console.log(error.error)
       alert(error.error);
     }
    );
   

  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-audiolist',
  templateUrl: './audiolist.component.html',
  styleUrls: ['./audiolist.component.css']
})
export class AudiolistComponent implements OnInit {
  audios: any;
  constructor(private _myservice :MyserviceService,private router:Router) {
    this._myservice.viewAudioTable().subscribe(data=>{
      console.log(data)
      this.audios=data;
    })
  }
  ngOnInit(): void {
  }
  delete_audio(track_id:any){
    this._myservice.deleteAudio(track_id).subscribe(data=>{
      
      console.log(data)
      
      this.router.navigate(['audiolist'])
      
    })
  }


  editaudios(track_id:any){
    this.router.navigate(["edit-audio"],{queryParams:{id:track_id}})
    
    
  }
  

 
}
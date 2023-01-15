import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  stars=[1,2,3,4,5]
  rating=0;
  starRating = 0;
  audios: any;
  searchForm: FormGroup;
  constructor(private _myservice:MyserviceService, private router:Router, private activeRoute: ActivatedRoute) { 
    this._myservice.userViewAudios().subscribe(data=>{
      console.log(data)
      this.audios=data;
    })
    this.searchForm= new FormGroup({
     
      track_id : new FormControl(null, Validators.required),
      
    })
    
    
  }

  ngOnInit(): void {
  }


  search(){}
  

  updateRating(rate:any){
    this.rating=rate;
    console.log(rate)
  }
  

  viewDetails(track_id:any){
    this.router.navigate(["user-audio-details"],{queryParams:{id:track_id}})
  }

  logout(){
    console.log("logout")
    localStorage.clear()
    this.router.navigate([''])
  }


  
}

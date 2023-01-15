import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-audio-details',
  templateUrl: './user-audio-details.component.html',
  styleUrls: ['./user-audio-details.component.css']
})
export class UserAudioDetailsComponent implements OnInit {
  audio:any;
  orderby: any;
  constructor(private _myservice:MyserviceService, private router:Router, private route: ActivatedRoute) {
  
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id')
    console.log(id)
    this._myservice.userViewOneAudio(id).subscribe(res=>{
      console.log(res);
      this.audio=res;
     
    })
  }

}

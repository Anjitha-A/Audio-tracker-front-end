import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  successMessage!:any;
  constructor(private _myservice :MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }


 
}

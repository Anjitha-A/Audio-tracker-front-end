import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  loginForm: FormGroup;
  successMessage!:any;
  constructor(private _myservice :MyserviceService,private router:Router) { 
    this.loginForm = new FormGroup({
      username : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),
    })
    
  }

  ngOnInit(): void {
  }




  isValid(controlName:any){
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }



  login(){
   
    
    this._myservice.submitLogin(this.loginForm.value)
    .subscribe(
      data =>{
        console.log(data);
        this.userType(data);
        this.tokenGenerate(data);
         this.successMessage = "Login success"
         
     },
     error=>{
       console.log(error.error)
      //  alert(error.error);
       alert("Access Denied..!!!! Invalid Username or Password")
     }
    );
    }
 
    tokenGenerate(token:any){
      localStorage.setItem("token",token.access_token)
      console.log(token.access_tocken)
     
    }

    userType(data:any){
      console.log(data.usertype)
      if(data.usertype=== "admin"){
        this.router.navigate(['adminhome'])
      }
      else if(data.usertype === "user"){
        this.router.navigate(['userhome'])
      } 

    }
}

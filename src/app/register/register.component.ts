import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
myForm: FormGroup;
successMessage!:any;
demo=true;
response:any;
constructor(private _myservice :MyserviceService,private router:Router) {

     this.myForm = new FormGroup({
     email : new FormControl(null, Validators.email),
     username : new FormControl(null, Validators.required),
     password : new FormControl(null, Validators.required)
    })
   }


  ngOnInit(): void {

  }



  isValid(controlName:any){
    return this.myForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  }




  register(){
     this._myservice.submitRegister(this.myForm.value).subscribe(
       data =>{
         console.log("jdghu")
         console.log(data);
         this.response = data;
         if(this.response==="User added successfully!"){
          this.successMessage = "Registration success"
          this.router.navigate(['login'])
         }
          else{
            alert('username already exists..')
            this.myForm.reset();
            this.router.navigate(['register'])
          }  
      },
     );
  }

}
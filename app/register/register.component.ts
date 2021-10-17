import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
//import { MustMatch } from './_helpers/must-match.validator';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm ! : FormGroup;

  constructor( private formBuilder : FormBuilder, private http : HttpClient , private router :Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group ( {
      Name : ['' , Validators.required],
      Password : ['',Validators.required],
      confirmPassword: ['', Validators.required],
      Mobile : ['',Validators.required],
      Email : ['',Validators.required]
   
      })
  }

  get check() { return this.registerForm.controls; }
  registerUser(){
    
    this.http.post<any>("http://localhost:3000/posts", this.registerForm.value)
    .subscribe(res=>{
      alert("Register Successful");
      this.registerForm.reset();
      this.router.navigate(['login'])
    })
  }

}


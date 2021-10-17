import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm ! : FormGroup;

  constructor(private formBuilder : FormBuilder , private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      Email : ['' , Validators.required],
      Password :['',Validators.required]

    })
  }
  loginUser(){
    this.http.get<any>("http://localhost:3000/posts " )
    .subscribe(res=> {
      const user = res.find((a:any)=> {
        return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
});
if(user){
  alert("Login Successful");
  this.loginForm.reset();
  this.router.navigate(['home'])
}
else{ alert("User not found")
}
    })
  }

}


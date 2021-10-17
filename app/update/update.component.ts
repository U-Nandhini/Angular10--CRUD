import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { HomeModel } from '../home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userForm ! : FormGroup

 homeModelobj : HomeModel = new HomeModel();
  data: any;

  constructor( private formbuilder : FormBuilder , private api : ApiService ,private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      Name : [ '' ],
      Password : [ '' ],
      Email  : [ '' ],
      Mobile : [ '' ]

    })

    this.getUserData();
  }
 

  postUserData(){
      this.homeModelobj.Name = this.userForm.value.Name;  // the value in the form get appended to the object and then it get post  to the server
      this.homeModelobj.Password = this.userForm.value.Password;
      this.homeModelobj.Mobile = this.userForm.value.Mobile;
      this.homeModelobj.Email = this.userForm.value.Email;
   
      this.api.postUser( this.homeModelobj)
      .subscribe(res => {
        console.log(res)
        alert("User added successfully")
        this.userForm.reset();
        this.getUserData();
        this.router.navigate(['home'])
      })
    }
  getUserData(){
    this.api.getUser()
    .subscribe (res => {
      this.data =res
      console.log(res)
    })
  }
 
  
  }
  



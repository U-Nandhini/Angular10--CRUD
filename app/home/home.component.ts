import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { HomeModel } from '../home.model';
//import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 searchText!: string;
 user = [];
 userForm ! : FormGroup
  homeModelobj : HomeModel = new HomeModel(); //created a object here for the model
  data: any;
  

  constructor(private formbuilder : FormBuilder , private api : ApiService ) { }

  ngOnInit(): void {

    
    
    this.userForm = this.formbuilder.group({
      Name : [ '' ],
      Password : [ '' ],
      Email  : [ '' ],
      Mobile : [ '' ]

    })
    

    this.getUserData();
  }

  
  // postUserData(){
  //   this.homeModelobj.Name = this.userForm.value.Name;  // the value in the form get appended to the object and then it get post  to the server
  //   this.homeModelobj.Password = this.userForm.value.Password;
  //   this.homeModelobj.Mobile = this.userForm.value.Mobile;
  //   this.homeModelobj.Email = this.userForm.value.Email;
 
  //   this.api.postUser( this.homeModelobj)
  //   .subscribe(res => {
  //     console.log(res)
  //     alert("User added successfully")
  //     this.userForm.reset();
  //     this.getUserData()
  //   })
  // }
  getUserData(){
    this.api.getUser()
    .subscribe (user => {
      this.data =user
      console.log(user)
    })
  }
 deleteUser(item : any)
 {
   this.api.deleteUser( item.id).subscribe(res =>{
   
     alert("User Deleted")
     this.getUserData()
   })
 }

onEdit(item:any){
   this.homeModelobj.id = item.id
  this.userForm.controls['Name'].setValue(item.Name)
   this.userForm.controls['Password'].setValue(item.Password)
   
   this.userForm.controls['Email'].setValue(item.Email)
   this.userForm.controls['Mobile'].setValue(item.Mobile)

  console.log(item)
   
 }

 updateUserData(){
  this.homeModelobj.Name = this.userForm.value.Name;  
  this.homeModelobj.Password = this.userForm.value.Password;
  this.homeModelobj.Mobile = this.userForm.value.Mobile;
  this.homeModelobj.Email = this.userForm.value.Email;
  this.api.updateUser(this.homeModelobj,this.homeModelobj.id).subscribe(res =>{
    alert("UserData Updated")
    this.getUserData()
  })

 
 
 

 
 }

}

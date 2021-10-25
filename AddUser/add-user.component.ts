import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { HomeModel } from '../home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = this.formbuilder.group({
    Name: [''],
    Password: [''],
    Email: [''],
    Mobile: [''],
  });

  homeModelobj: HomeModel = new HomeModel();
  data: any;

  constructor( private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router)
   // private   service : CommonItemService)
    { }

  ngOnInit(): void {
    

  }

  addUser() {
    this.homeModelobj.Name = this.userForm.value.Name;
    this.homeModelobj.Password = this.userForm.value.Password;
    this.homeModelobj.Mobile = this.userForm.value.Mobile;
    this.homeModelobj.Email = this.userForm.value.Email;

    this.api.postUser(this.homeModelobj).subscribe((res:any) => {
     
      alert('User added successfully');
      this.userForm.reset();
      this.getUserData();
      this.router.navigate(['home']);
    });
  }
// To get all the data to the table
  getUserData() {
    this.api.getUser().subscribe((res) => {
      this.data = res;
     
    });
  }

}

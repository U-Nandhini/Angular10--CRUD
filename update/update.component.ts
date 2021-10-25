import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../common/api.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  userForm = this.formbuilder.group({
    Name: [''],
    Password: [''],
    Email: [''],
    Mobile: [''],
  });

  data: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.api.editUser(this.route.snapshot.params.id).subscribe((result) => {
      
      this.userForm = this.formbuilder.group({
        Name: result['Name'],
        Password: result['Password'],
        Email: result['Email'],
        Mobile: result['Mobile'],
      });
    });

    this.getUserData();
  }

  //update the changes in the Data(edit)
  updateUserData() {
    this.api
      .updateUser(this.route.snapshot.params.id, this.userForm.value)
      .subscribe((res) => {
        alert('UserData Updated');
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

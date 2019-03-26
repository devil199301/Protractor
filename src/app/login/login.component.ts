import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    account: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { 
    this.loginForm= new FormGroup({
      username:new FormControl('',[Validators.required, Validators.minLength(3)]),
      password:new FormControl()
    });
  }

  ngOnInit(): void {
  }
  loginSubmit(): void{
    console.log(this.loginForm.value);
  }

}

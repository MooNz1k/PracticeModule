import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  pageTitle = 'Sign In ';

  loginForm : FormGroup;

  constructor(private fb : FormBuilder,
              private router : Router) { 
    this.loginForm = this.fb.group({
        userName : ['',[Validators.required,Validators.minLength(3)]] ,
        Password : ['',[Validators.required]]
    })
  }
  ngOnInit() {
  }
  save() : void {
    this.router.navigate(['/customer']);
    console.log("Saved : " + this.loginForm.value.userName + " " +  this.loginForm.value.Password)
  }

}

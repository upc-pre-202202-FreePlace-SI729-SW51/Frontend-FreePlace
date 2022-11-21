import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../security/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private router: Router, private driverService: AuthService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  validateLogin() {

    const formValue = this.form.value;
    console.log(formValue)
    this.driverService.getByUsername(formValue.email)
      .subscribe((res)=>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email or password are wrong')
        } else {
          console.log(res.password);
          if (res.password===formValue.password) {
            this.router.navigate(['home/', res.id])
          } else {
            alert('Email or password are wrong')
          }
        }
      })

  }

  navigateRegister() {
    this.router.navigate([`/register`]).then(() => null);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  hide = true;
}

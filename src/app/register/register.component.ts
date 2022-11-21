import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../security/services/auth.service";
import {User} from "../security/model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router, private driverService: AuthService) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  register() {

    const driver: User ={
      creditCardId: 1,
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password,
      contact: this.form.value.phone,
      username: this.form.value.username,
      vehicleNumber: this.form.value.vehicleNumber,
    }

    console.log(driver)

    this.driverService.create(driver)
      .subscribe(res =>{
          this.form.reset();
          this.route.navigate(['/login'])
        },
        er => console.log(er),
        ()=>console.log('Finish'),
      );
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

}

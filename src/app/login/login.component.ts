import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string = "";
  password: string = "";
  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  validateLogin() {

    //ACA HAY UN EJEMPLO DE LA LOGICA PARA EL LOGIN AHI COMPLETAS CON LOS DATOS Y EL SERVICIO

    /*
     const formValue = this.form.value;
    this._driverService.getEmail(formValue.email)
      .subscribe((res)=>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email or password are wrong')
        } else {
          console.log(res.password);
          if (res.password===formValue.password) {
            this.route.navigate(['home/', res.id])
          } else {
            alert('Email or password are wrong')
          }
        }
      })
     */
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

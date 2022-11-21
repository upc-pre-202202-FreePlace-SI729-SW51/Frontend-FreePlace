import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router) {
    this.form = this.fb.group({
      id: [''],
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

    //ACA HAY UN EJEMPLO DE LA LOGICA PARA EL REGISTRO AHI COMPLETAS CON LOS DATOS Y EL SERVICIO

    /*const driver: Driver ={
      id: this.form.value.id,
      fullName: this.form.value.firstName,
      email: this.form.value.lastName,
      password: this.form.value.email,
      phone: this.form.value.password,
      username: this.form.value.phone,
      vehicleNumber: this.form.value.date,
    }

    this._driverService.create(driver)
      .subscribe(res =>{
          this.form.reset();
          this.route.navigate(['/login'])
        },
        er => console.log(er),
        ()=>console.log('Finish'),
      );*/
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

}

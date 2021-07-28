import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Error {
  email: boolean;
  password: boolean;
  global: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../scss/login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLogin: boolean = true;
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public error: Error = {
    email: false,
    password: false,
    global: false,
  };

  // Convenience getters to access form control properties
  get email(): AbstractControl | null {
    return this.form.get('email');
  }
  get password(): AbstractControl | null {
    return this.form.get('password');
  }
  get repeatPassword(): AbstractControl | null {
    return this.form.get('repeatPassword');
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl('user@example.com', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('123456', {
        validators: [Validators.minLength(6), Validators.required],
      }),
      repeatPassword: new FormControl('1234', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.email!.invalid) {
      this.error.email = true;
      this.error.global = true;
    } else if (this.password!.invalid) {
      this.error.password = true;
      this.error.global = true;
    } else {
      console.log('Login submitted');
    }
  }
}

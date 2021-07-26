import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { passwordMatchValidator } from '../password-match.directive';

@Component({
  selector: 'app-signup',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../scss/login.component.scss'],
})
export class SignupComponent implements OnInit {
  public isLogin: boolean = false;
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public error = '';

  // Convenience getters to access form control properties
  get name(): AbstractControl | null {
    return this.form.get('name');
  }
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
    this.form = this.formBuilder.group(
      {
        name: new FormControl('User Name', {
          validators: [Validators.required],
        }),
        email: new FormControl('user@example.com', {
          validators: [Validators.email, Validators.required],
        }),
        password: new FormControl('123456', {
          validators: [Validators.minLength(6), Validators.required],
        }),
        repeatPassword: new FormControl('1234', {
          validators: [Validators.required],
        }),
      },
      { validators: passwordMatchValidator }
    );
  }

  ngOnInit(): void {}

  submit() {
    console.log('Signup submitted');
  }
}

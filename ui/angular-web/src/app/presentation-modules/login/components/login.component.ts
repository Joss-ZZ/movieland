import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  public error = '';

  // Convenience getters to access form control properties
  get email(): AbstractControl | null {
    return this.form.get('email');
  }
  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl('user@example.com', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('123456', {
        validators: [Validators.minLength(6), Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log('Login submitted');
  }
}

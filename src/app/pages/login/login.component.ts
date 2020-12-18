import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  login(event): void {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      console.log(user);
      this.loginService.login(user).subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['/']);
      });
    }
  }

  // build the reactive form with validators
  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Getters to shortcut the values of the form
  get emailField(): any {
    return this.form.get('email');
  }

  get passwordField(): any {
    return this.form.get('password');
  }
}

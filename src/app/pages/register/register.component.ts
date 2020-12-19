import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repassword: new FormControl(),
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  registerUser(event): void {
    event.preventDefault();
    if (this.form.valid) {
      const userForm = this.form.value;
      if (userForm.password === userForm.repassword) {
        const user = { password: userForm.password, email: userForm.email, name: userForm.name };
        this.loginService.register(user).subscribe((resp) => {
          this.router.navigate(['/login']);
        });
      } else {
        alert('Las contraseñas no coinsiden')
      }
    }
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  // build the reactive form with validators
  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
    });
  }

  // Getters to shortcut the values of the form
  get nameField(): any {
    return this.form.get('name');
  }

  get emailField(): any {
    return this.form.get('email');
  }

  get passwordField(): any {
    return this.form.get('password');
  }

  get repasswordField(): any {
    return this.form.get('repassword');
  }
}

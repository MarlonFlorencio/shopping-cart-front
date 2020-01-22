import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Login } from '../../models';
import { LoginService } from '../../services';
import { UserService } from '../../../../shared';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService
  ){ }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          this.userService.setToken(data['token'])
          if (this.userService.hasRole('ADMIN')) {
            this.router.navigate(['/items']);
          } else {
            this.router.navigate(['/shop']);
          }
        },
        err => {
          let msg: string = "Please try again in a few moments.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}

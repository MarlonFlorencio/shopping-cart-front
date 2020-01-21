import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Registration } from '../../models';
import { RegistrationService } from '../../services';

import { UserService } from '../../../../shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
  	private fb: FormBuilder, 
  	private snackBar: MatSnackBar,
    private router: Router,
    private registrationService: RegistrationService,
    private userService: UserService
  ) { }

  ngOnInit() {
  	this.generateForm();
  }

  generateForm() {
  	this.form = this.fb.group({
  		name: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', [Validators.required, Validators.minLength(6)]],
  	});
  }

  register() {
  	if (this.form.invalid) {
      return;
    }

    const registration: Registration = this.form.value;
    this.registrationService.register(registration)
      .subscribe(
        data => {
          this.userService.setToken(data['token'])
          this.router.navigate(['/shop']);
        },
        err => {
          let msg: string = "Please try again in a few moments.";
          if (err.status == 400) {
            msg = err.error && err.error.message ? err.error.message : 'Bad Request' ;
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }

}
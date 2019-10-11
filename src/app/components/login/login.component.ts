import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor( private formBuilder: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

    onSubmit() {
      // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
          }
          this.loginService.login(this.loginForm.value).subscribe(
            data => console.log(data),
            err => console.log(err));
  }
}

import { Component, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  
  onEmailSubmitted(email: string) {
    this.email = email;
  }
  onPasswordSubmitted(password: string) {
    this.password = password;
  }
  
  constructor(private http: HttpClient) { }
  login() {
    this.http.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      console.log(res);
    });
  }

  router = inject(Router);
	navigate() {
		this.router.navigateByUrl('/sing-up');
	}
}

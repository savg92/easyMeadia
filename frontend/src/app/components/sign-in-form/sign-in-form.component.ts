import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
	selector: 'app-sign-in-form',
	templateUrl: './sign-in-form.component.html',
	styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
	constructor(private loginService: LoginService) {}

	// router
	router = inject(Router);

	// show/hide password
	showPassword = false;
	input = 'password';
	toggleShow() {
		this.showPassword = !this.showPassword;
		this.input = this.showPassword ? 'text' : 'password';
	}

	// form validation
	loginForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
		]),
		password: new FormControl('', Validators.required),
	});

	// send data to parent component?
	@Output() emailSubmitted = new EventEmitter();
	@Output() passwordSubmitted = new EventEmitter();

	errorEmail = '';
	errorEmailOrPassword = '';

	onSubmit() {
		
		if (this.loginForm.valid) {
			const email = this.loginForm.value.email;
			this.emailSubmitted.emit(email);

			const password = this.loginForm.value.password;
			this.passwordSubmitted.emit(password);

			// console.log(this.loginForm.value);

			try {
				this.loginService.login(this.loginForm.value).subscribe(
					(res: any) => {
					localStorage.setItem('token', res.token);
					console.log(res);
					this.loginForm.reset();
					this.errorEmail = '';
					this.errorEmailOrPassword = '';
					this.router.navigateByUrl('/add-note');
				},
					(error: any) => {
						// console.log(error);


						
						// ? fix prevent default
						this.errorEmailOrPassword = 'Invalid email or password';
					}
				);

			} catch (error: any) {
				console.log(error);
				this.errorEmailOrPassword = 'Invalid email or password';
			}
		} else {
			const emailControl = this.loginForm.get('email');
			if (emailControl && !emailControl.valid) {
				this.errorEmail = 'Please provide a valid email';
			}
		}
	}
}

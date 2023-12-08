import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sign-in-form',
	templateUrl: './sign-in-form.component.html',
	styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
	// show/hide password
	showPassword = false;
	input = 'password';
	toggleShow() {
		this.showPassword = !this.showPassword;
		this.input = this.showPassword ? 'text' : 'password';
	}

	// form validation

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
		password: new FormControl('', Validators.required),
	});

	email: string = '';
	password: string = '';

	

	// login2() {
	// 	alert(this.loginForm.value.email + ' | ' + this.loginForm.value.password);
	// }

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

			console.log(this.loginForm.value);

			try{
				this.loginForm.reset();
			}
			catch(error){
				console.log(error);
				this.errorEmailOrPassword = 'Invalid email or password'
			}
		} else {
			const emailControl = this.loginForm.get('email');
			if (emailControl && !emailControl.valid) {
				this.errorEmail = 'Please provide a valid email';
			}
		}
	}
}

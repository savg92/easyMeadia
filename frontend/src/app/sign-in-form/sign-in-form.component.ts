import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sign-in-form',
	templateUrl: './sign-in-form.component.html',
	styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
	loginForm = new FormGroup({
		email: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	email: string = '';

	password: string = '';

	input = 'password';

	login2() {
		alert(this.loginForm.value.email + ' | ' + this.loginForm.value.password);
	}

	showPassword = false;

	toggleShow() {
		this.showPassword = !this.showPassword;
		this.input = this.showPassword ? 'text' : 'password';
	}

	@Output() emailSubmitted = new EventEmitter();
	@Output() passwordSubmitted = new EventEmitter();
	
	onSubmit() {
		if (this.loginForm.valid) {
			const email = this.loginForm.value.email;
			this.emailSubmitted.emit(email);
		}
		if (this.loginForm.valid) {
			const password = this.loginForm.value.password;
			this.passwordSubmitted.emit(password);
		}
		console.log(this.loginForm.value);
	}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sing-up-form',
	templateUrl: './sing-up-form.component.html',
	styleUrls: ['./sing-up-form.component.scss'],
})
export class SingUpFormComponent {
	// show/hide password
	showPassword = false;
	input = 'password';
	input2 = 'password';

	toggleShow() {
		this.showPassword = !this.showPassword;
		this.input = this.showPassword ? 'text' : 'password';
	}

	toggleShow2() {
		this.showPassword = !this.showPassword;
		this.input2 = this.showPassword ? 'text' : 'password';
	}

	// form validation

	loginForm = new FormGroup({
		fullName: new FormControl('', Validators.required),
		email: new FormControl('', [
			Validators.required,
			Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
		]),
		password: new FormControl('', Validators.required),
	});

	fullName: string = '';
	email: string = '';
	password: string = '';

	errorEmail = '';

	@Output() fullNameSubmitted = new EventEmitter();
	@Output() emailSubmitted = new EventEmitter();
	@Output() passwordSubmitted = new EventEmitter();

	onSubmit() {
		if (this.loginForm.valid) {
			const email = this.loginForm.value.email;
			this.emailSubmitted.emit(email);

			const password = this.loginForm.value.password;
			this.passwordSubmitted.emit(password);

			console.log(this.loginForm.value);
		} else {
			const emailControl = this.loginForm.get('email');
			if (emailControl && !emailControl.valid) {
				this.errorEmail = 'Please provide a valid email';
			}
		}
	}
}

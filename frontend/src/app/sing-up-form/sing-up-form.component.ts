import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sing-up-form',
	templateUrl: './sing-up-form.component.html',
	styleUrls: ['./sing-up-form.component.scss'],
})
export class SingUpFormComponent {
	loginForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
		email: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	email: string = '';

	password: string = '';

	input = 'password';
	input2 = 'password';

	login2() {
		alert(this.loginForm.value.email + ' | ' + this.loginForm.value.password);
	}

	showPassword = false;

	toggleShow() {
		this.showPassword = !this.showPassword;
		this.input = this.showPassword ? 'text' : 'password';
	}
  
	toggleShow2() {
		this.showPassword = !this.showPassword;
		this.input2 = this.showPassword ? 'text' : 'password';
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

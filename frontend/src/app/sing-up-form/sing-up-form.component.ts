import { Component, EventEmitter, Output } from '@angular/core';
import {
	AbstractControl,
	FormGroup,
	FormControl,
	Validators,
} from '@angular/forms';
import { RegisterService } from '../services/register/register.service';
@Component({
	selector: 'app-sing-up-form',
	templateUrl: './sing-up-form.component.html',
	styleUrls: ['./sing-up-form.component.scss'],
})
export class SingUpFormComponent {
	constructor(private registerService: RegisterService) {}

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
	passwordMatchValidator(control: AbstractControl) {
		const g = control as FormGroup;
		return g.get('password')?.value === g.get('confirmPassword')?.value
			? null
			: { mismatch: true };
	}

	loginForm = new FormGroup(
		{
			fullName: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
				Validators.pattern(
					'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'
				),
			]),
			confirmPassword: new FormControl('', Validators.required),
		},
		{ validators: this.passwordMatchValidator }
	);

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

			// this.registerService.register(this.loginForm.value).subscribe(
			// 	(res) => {
			// 		console.log(res);
			// 	},
			// 	(error) => {
			// 		console.log(error);
			// 	}
			// );
		} else {
			if (this.loginForm.errors?.['mismatch']) {
				alert('Passwords do not match');
			}
			const emailControl = this.loginForm.get('email');
			if (emailControl && !emailControl.valid) {
				this.errorEmail = 'Please provide a valid email';
			}
		}
	}
}

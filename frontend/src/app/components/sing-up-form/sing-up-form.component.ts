import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
	AbstractControl,
	FormGroup,
	FormControl,
	Validators,
} from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-sing-up-form',
	templateUrl: './sing-up-form.component.html',
	styleUrls: ['./sing-up-form.component.scss'],
})
export class SingUpFormComponent {
	constructor(
		private registerService: RegisterService,
		private loginService: LoginService
	) {}

	// show/hide password
	showPassword = false;
	input = 'password';
	input2 = 'password';

	// router
	router = inject(Router);

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
				// Validators.minLength(8),
				// Validators.pattern(
				// 	'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'
				// ),
			]),
			confirmPassword: new FormControl('', Validators.required),
		},
		{ validators: this.passwordMatchValidator }
	);

	errorFullName = '';
	errorEmail = '';
	errorPassword = '';
	errorConfirmPassword = '';
	errorSignUp = '';

	@Output() fullNameSubmitted = new EventEmitter();
	@Output() emailSubmitted = new EventEmitter();
	@Output() passwordSubmitted = new EventEmitter();

	onSubmit() {
		if (this.loginForm.valid) {
			const email = this.loginForm.value.email;
			this.emailSubmitted.emit(email);

			const password = this.loginForm.value.password;
			this.passwordSubmitted.emit(password);

			const loginForm = {
				email: this.loginForm.value.email,
				password: this.loginForm.value.password,
			};

			this.registerService.register(this.loginForm.value).subscribe(
				(res) => {
					//* TODO: show success message
					console.log(res);
					if (!res.error) {
						this.loginService.login(loginForm).subscribe((res: any) => {
							if (!res.error) {
								document.cookie = `token=${res.token}; path=/; SameSite=Strict; Secure; HttpOnly; max-age=1800`;
								localStorage.setItem('token', res.token);
								console.log(res);

								this.router.navigateByUrl('/add-note');
							} else {
								console.log(res);
							}
						});
					}
				},
				(error) => {
					console.log(error);
					this.errorSignUp = 'An error occured, please try again later';
				}
			);
		} else {
			const nameControl = this.loginForm.get('fullName');
			const emailControl = this.loginForm.get('email');
			const passwordControl = this.loginForm.get('password');
			const confirmPasswordControl = this.loginForm.get('confirmPassword');

			if (nameControl && !nameControl.valid) {
				this.errorFullName = 'Please provide a valid name';
			}

			if (emailControl && !emailControl.valid) {
				this.errorEmail = 'Please provide a valid email';
			}

			if (passwordControl && !passwordControl.valid) {
				this.errorPassword = 'Please provide a password';
			}

			if (confirmPasswordControl && !confirmPasswordControl.valid) {
				this.errorConfirmPassword = 'Please confirm your password';
			}
		}
	}
}

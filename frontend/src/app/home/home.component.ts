import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	template: `
		<p>hello {{ title }}!</p>

		<p [class.highlighted]="isHighlighted">This is some text</p>
		<input
			type="text"
			[attr.aria-label]="inputName"
		/>
		<p [style.text-decoration]="linkStyle">Login</p>

		<button (click)="login()">Click me</button>
		<p [class.red]="isRed">some text for our page</p>
		<button (click)="change()">Switch Background Color</button>

		<div *ngFor="let item of products">{{ item }}</div>

		<div *ngIf="loggedIn">Welcome!</div>

		<button (click)="navigate()">Notes</button>

		<h1 class="text-3xl font-bold underline">Hello world!</h1>
	`,
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	title = 'world';

	isHighlighted = true;

	inputName = 'my input';
	linkStyle = 'underline';

	login() {
		alert('login');
	}
	isRed = false;
	change() {
		this.isRed = !this.isRed;
	}

	products = ['apple', 'orange', 'banana'];

	loggedIn = true;

	router = inject(Router);
	navigate() {
		this.router.navigateByUrl('/notes');
	}
}

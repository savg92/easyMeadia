import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-other',
	templateUrl: './other.component.html',
	styleUrls: ['./other.component.scss'],
})
export class OtherComponent {
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/AuthGuard';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	private tokenUserName: string | null = null;
	logoRoute = '/login';
	loggedIn = false;

	constructor(public router: Router, private authGuard: AuthGuard) {
		this.authGuard.isLoggedIn.subscribe((loggedIn) => {
			// this.menuOpen = loggedIn;
			console.log('menuOpen', loggedIn);
			this.loggedIn = loggedIn;
		});

		const token = localStorage.getItem('token');
		const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
		if (token) {
			const tokenExp = decoded.exp;
			if (tokenExp > Date.now() / 1000) {
				this.tokenUserName = decoded.data.name;
				this.logoRoute = '/add-note';
			}
		}
	}

	menuOpen = false;
	user = 'User';

	logout() {
		localStorage.removeItem('token');
		this.menuOpen = false;
		this.loggedIn = false;
	}

	ngOnInit(): void {
		if (this.tokenUserName) {
			this.user =
				this.tokenUserName[0].toUpperCase() + this.tokenUserName.slice(1);
		}
	}

	isFunc(func: any): boolean {
		return typeof func === 'function';
	}

	nav = [
		{
			title: 'Create Publication',
			img: '../../../assets/create.svg',
			alt: 'create',
			route: '/add-note',
		},
		{
			title: 'My Publications',
			img: '../../../assets/myNotes.svg',
			alt: 'My notes',
			route: '/my-notes',
		},
		{
			title: 'See All Publications',
			img: '../../../assets/allNotes.svg',
			alt: 'All notes',
			route: '/notes',
		},
		{
			title: 'Logout',
			img: '../../../assets/logout.svg',
			alt: 'logout',
			route: '/login',
			func: () => this.logout(),
		},
	];
}

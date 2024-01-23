import { Component } from '@angular/core';
import { Router } from '@angular/router';

type JwtPayload = {
	iat: number;
	exp: number;
	data: {
		id: number;
    name: string;
		type: string;
	};
};
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	private tokenUserName: string | null = null;

	constructor(public router: Router) {
		const token = localStorage.getItem('token');
		if (token) {
			this.tokenUserName = JSON.parse(atob(token.split('.')[1])).data.name;
			console.log('tokenExp', this.tokenUserName);
		}
	}

	menuOpen = false;
	user = 'User';

	logout() {
		localStorage.removeItem('token');
	}

	ngOnInit(): void {
		if (this.tokenUserName) {
			this.user = this.tokenUserName[0].toUpperCase() + this.tokenUserName.slice(1);
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

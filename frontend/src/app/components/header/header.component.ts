import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

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
	private decoded: JwtPayload | null = null;

	constructor(public router: Router) {
		const token = localStorage.getItem('token');
		if (token && token.split('.').length === 3) {
			this.decoded = jwtDecode<JwtPayload>(token);
		}
	}

	menuOpen = false;
	user = 'User';

	logout() {
		localStorage.removeItem('token');
	}

	ngOnInit(): void {
		if (this.decoded) {
			this.user =
				this.decoded.data.name[0].toUpperCase() +
				this.decoded.data.name.slice(1);
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

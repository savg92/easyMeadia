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
	user = '';

	logout() {
		localStorage.removeItem('token');
	}
  

	ngOnInit(): void {
		if (this.decoded) {
			this.user = this.decoded.data.name;
		}
	}

}

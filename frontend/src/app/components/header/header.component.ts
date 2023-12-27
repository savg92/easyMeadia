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
	constructor(public router: Router) {}
	menuOpen = false;
	user = '';

	logout() {
		localStorage.removeItem('token');
	}
  
  // decode token for get user id
  private	decoded = jwtDecode<JwtPayload>(localStorage.getItem('token') ?? '');

  ngOnInit(): void {
    this.user = this.decoded.data.name;
  }

}

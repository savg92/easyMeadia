import { Component } from '@angular/core';
import { Router } from '@angular/router';

type JwtPayload = {
	iat: number;
	exp: number;
	data: {
		id: number;
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

  logout() {
    localStorage.removeItem('token');
  }
}

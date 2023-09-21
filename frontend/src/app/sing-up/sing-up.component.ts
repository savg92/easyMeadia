import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sing-up',
	templateUrl: './sing-up.component.html',
	styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {
	router = inject(Router);
	navigate() {
		this.router.navigateByUrl('/login');
	}
}

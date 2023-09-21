import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(public authService: AuthService) { 
    const isLoggedIn = this.authService;
    console.log(isLoggedIn);
  }

  onLogout() {
    this.authService.logout();
  }
}
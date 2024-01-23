import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router) { }

    canActivate() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
        if (tokenExp < Date.now() / 1000) {
            this.router.navigate(['/login']);
            localStorage.removeItem('token');
            return false;
        }
        
        // this.router.navigate(['/home']);
        return true;
    }
    
}
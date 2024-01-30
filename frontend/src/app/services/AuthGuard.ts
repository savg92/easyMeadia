import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) { }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    canActivate() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login']);
            this.loggedIn.next(false);
            return false;
        }

        const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;
        if (tokenExp < Date.now() / 1000) {
            this.router.navigate(['/login']);
            localStorage.removeItem('token');
            this.loggedIn.next(false);
            return false;
        }
        
        this.loggedIn.next(true);
        return true;
    }
    
}
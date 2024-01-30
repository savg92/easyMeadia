import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	api_url = 'http://localhost:3000/api/login';

	constructor(private http: HttpClient) {}

	login(userData: any) {
		return this.http.post<any>(this.api_url, userData);
	}

	error(error: HttpErrorResponse) {
		console.log(error);
	}
}

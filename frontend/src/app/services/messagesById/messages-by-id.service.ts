import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MessagesByIdService {
	api_url = 'http://localhost:3000/api/messages';
	private token = localStorage.getItem('token');
	private decoded = this.token ? JSON.parse(atob(this.token.split('.')[1])).data.id : null;

	constructor(private http: HttpClient) {}

	getMessagesById(id = this.decoded) {
		return this.http.get<any>(`${this.api_url}/${id}`, {
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	error(error: HttpErrorResponse) {
		console.log(error);
	}
}

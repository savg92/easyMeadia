import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AddMessageService {
	api_url = 'http://localhost:3000/api/messages';
	token = localStorage.getItem('token');

	constructor(private http: HttpClient) {}

	addMessage(messageData: any) {
		return this.http.post<any>(
			this.api_url,
			{
				headers: {
					Authorization: `Bearer ${this.token}`,
				},
			},
			messageData
		);
	}

	error(error: HttpErrorResponse) {
		console.log(error);
	}
}

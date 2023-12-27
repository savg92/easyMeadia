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
				title: messageData.title,
				body: messageData.body,
				UserId: messageData.UserId,
			},
			{
				headers: {
					Authorization: `Bearer ${this.token}`,
				},
			}
		);
	}

	error(error: HttpErrorResponse) {
		console.log(error);
	}
}

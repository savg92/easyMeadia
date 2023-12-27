import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

@Injectable({
	providedIn: 'root',
})
export class MessagesByIdService {
	api_url = 'http://localhost:3000/api/messages';
	token = localStorage.getItem('token');

	private decoded = jwtDecode<JwtPayload>(this.token ?? '');

	constructor(private http: HttpClient) {}

	getMessagesById(id = this.decoded.data.id) {
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

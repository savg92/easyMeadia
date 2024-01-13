import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AllMessagesService {
  api_url = 'http://localhost:3000/api/messages';
  token = localStorage.getItem('token');

	constructor(private http: HttpClient) {}


  getAllMessages() {
    return this.http.get(this.api_url
      , {
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

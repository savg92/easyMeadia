// This file exports a class AuthService which handles the authentication process.
// It uses the HttpClient to make HTTP requests to the server.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Sends a POST request to the server to log in the user.
  // Returns an Observable of the User object.
  login(username: string, password: string): Observable<User> {
    const url = `${this.apiUrl}/login`;
    const body = { username, password };
    return this.http.post<User>(url, body);
  }

  // Sends a GET request to the server to log out the user.
  // Returns an Observable of any.
  logout(): Observable<any> {
    const url = `${this.apiUrl}/logout`;
    return this.http.get(url);
  }

  // Sends a POST request to the server to register a new user.
  // Returns an Observable of the User object.
  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, user);
  }

  // Sends a GET request to the server to check if the user is authenticated.
  // Returns an Observable of any.
  isAuthenticated(): Observable<any> {
    const url = `${this.apiUrl}/isAuthenticated`;
    return this.http.get(url);
  }
}
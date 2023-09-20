import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  getMessage(id: string): Observable<Message> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Message>(url);
  }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }

  updateMessage(message: Message): Observable<Message> {
    const url = `${this.apiUrl}/${message.id}`;
    return this.http.put<Message>(url, message);
  }

  deleteMessage(id: string): Observable<Message> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Message>(url);
  }

  searchMessages(query: string): Observable<Message[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<Message[]>(url);
  }
}
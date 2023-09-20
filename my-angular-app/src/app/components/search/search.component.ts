import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  messages: any[];

  constructor(private messageService: MessageService) { }

  search() {
    this.messageService.search(this.query).subscribe(
      (data: any[]) => {
        this.messages = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
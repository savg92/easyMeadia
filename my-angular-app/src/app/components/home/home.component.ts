import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  messages: Message[];

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  deleteMessage(message: Message) {
    this.messageService.deleteMessage(message.id).subscribe(() => {
      this.messages = this.messages.filter(m => m !== message);
    });
  }
}
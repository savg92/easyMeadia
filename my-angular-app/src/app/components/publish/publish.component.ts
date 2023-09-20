import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent {
  message: string;

  constructor(private messageService: MessageService) {}

  publishMessage(): void {
    if (this.message) {
      this.messageService.publishMessage(this.message).subscribe(() => {
        this.message = '';
      });
    }
  }
}
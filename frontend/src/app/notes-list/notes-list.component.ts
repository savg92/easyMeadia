import { Component } from '@angular/core';
import { NOTES } from 'src/notes';
import { AllMessagesService } from '../services/allMessages/all-messages.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  constructor(private allMessages: AllMessagesService) { }
  notes = NOTES
  // notes = this.allMessages.getAllMessages();
  // notes = this.allMessages.getAllMessages().subscribe(
  //   (res: any) => {
  //     this.notes = res;
  //     console.log(res);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  ngOnInit(): void {
    this.allMessages.getAllMessages().subscribe(
      (res: any) => {
        this.notes = res.data;
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

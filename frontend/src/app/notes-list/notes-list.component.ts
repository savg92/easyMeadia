import { Component } from '@angular/core';
import { NOTES } from 'src/notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  notes = NOTES
}

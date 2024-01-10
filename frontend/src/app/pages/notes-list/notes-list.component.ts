import { Component } from '@angular/core';
import { NOTES } from 'src/notes';
import { AllMessagesService } from '../../services/allMessages/all-messages.service';

@Component({
	selector: 'app-notes-list',
	templateUrl: './notes-list.component.html',
	styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent {
	constructor(private allMessages: AllMessagesService) {}
	notes = NOTES;
	search = '';

	ngOnInit(): void {
		this.allMessages.getAllMessages().subscribe(
			(res: any) => {
				this.notes = res.data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	// search notes, filter by title or body text (case insensitive) and show results
	searchNotes() {
		if (this.search) {
			this.notes = this.notes.filter((note) => {
				
				return (
					note.title?.toLowerCase().includes(this.search.toLowerCase()) ||
					note.body?.toLowerCase().includes(this.search.toLowerCase())
				);
			});
			console.log(this.notes);
		} else {
			this.ngOnInit();
		}
	}
}

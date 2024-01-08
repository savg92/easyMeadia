import { Component } from '@angular/core';
import { MessagesByIdService } from 'src/app/services/messagesById/messages-by-id.service';
import { NOTES } from 'src/notes';

@Component({
	selector: 'app-my-messages',
	templateUrl: './my-messages.component.html',
	styleUrls: ['./my-messages.component.scss'],
})
export class MyMessagesComponent {
	constructor(private messagesByIdService: MessagesByIdService) {}

	notes = NOTES;
	search = '';

	ngOnInit(): void {
		this.messagesByIdService.getMessagesById().subscribe(
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
		} else {
			this.ngOnInit();
		}
	}
}

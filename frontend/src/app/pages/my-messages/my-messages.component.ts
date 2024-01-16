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
	
	ngOnInit(): void {
		this.messagesByIdService.getMessagesById().subscribe(
			(res: any) => {
				this.notes = res.data;
				// this.checkCookie();
			},
			(error) => {
				console.log(error);
			}
		);
	}

	notes = NOTES;
	search = '';
	searchDate = '';

	// search notes, filter by date and show results
	searchNotesByDate() {
		if (this.searchDate) {
			const searchDate = new Date(this.searchDate as string); // assert this.searchDate as string

			const searchDateString = `${searchDate.getUTCFullYear()}-${(
				'0' +
				(searchDate.getUTCMonth() + 1)
			).slice(-2)}-${('0' + searchDate.getUTCDate()).slice(-2)}`;

			this.notes = this.notes.filter((note) => {
				const noteDate = new Date(note.updatedAt as string); // create a new Date object from updatedAt

				// adjust the noteDate by the timezone offset
				noteDate.setMinutes(
					noteDate.getMinutes() - noteDate.getTimezoneOffset()
				);

				const noteDateString = `${noteDate.getUTCFullYear()}-${(
					'0' +
					(noteDate.getUTCMonth() + 1)
				).slice(-2)}-${('0' + noteDate.getUTCDate()).slice(-2)}`;

				return noteDateString === searchDateString;
			});
		} else {
			this.ngOnInit();
		}
	}
}

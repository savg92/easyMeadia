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

	notes = NOTES;
	search = '';
	searchDate = '';

	// search notes, filter by title or body text (case insensitive) and show results
	// searchNotesByTitle() {
	// 	if (this.search) {
	// 		this.notes = this.notes.filter((note) => {
	// 			return (
	// 				note.title?.toLowerCase().includes(this.search.toLowerCase()) ||
	// 				note.body?.toLowerCase().includes(this.search.toLowerCase())
	// 			);
	// 		});
	// 	} else {
	// 		this.ngOnInit();
	// 	}
	// }

	searchNotes() {		
		if (this.search || this.searchDate) {
			let searchDateString = '';
			if (this.searchDate) {
				const searchDate = new Date(this.searchDate as string); // assert this.searchDate as string
				searchDateString = `${searchDate.getUTCFullYear()}-${('0' + (searchDate.getUTCMonth() + 1)).slice(-2)}-${('0' + searchDate.getUTCDate()).slice(-2)}`;
			}

			this.notes = this.notes.filter((note) => {
				const noteDate = new Date(note.updatedAt as string); // create a new Date object from updatedAt
				// adjust the noteDate by the timezone offset
				noteDate.setMinutes(noteDate.getMinutes() - noteDate.getTimezoneOffset());
				const noteDateString = `${noteDate.getUTCFullYear()}-${('0' + (noteDate.getUTCMonth() + 1)).slice(-2)}-${('0' + noteDate.getUTCDate()).slice(-2)}`;

				return (
					(note.title?.toLowerCase().includes(this.search.toLowerCase()) ||
					note.body?.toLowerCase().includes(this.search.toLowerCase())) &&
					(!this.searchDate || noteDateString === searchDateString)
				);
			});
		} else {
			this.ngOnInit();
		}
	}

	// search notes, filter by date and show results
	searchNotesByDate() {
		if (this.searchDate) {
			const searchDate = new Date(this.searchDate as string); // assert this.searchDate as string

			const searchDateString = `${searchDate.getUTCFullYear()}-${('0' + (searchDate.getUTCMonth() + 1)).slice(-2)}-${('0' + searchDate.getUTCDate()).slice(-2)}`;

			this.notes = this.notes.filter((note) => {
				const noteDate = new Date(note.updatedAt as string); // create a new Date object from updatedAt

				// adjust the noteDate by the timezone offset
				noteDate.setMinutes(noteDate.getMinutes() - noteDate.getTimezoneOffset());

				const noteDateString = `${noteDate.getUTCFullYear()}-${('0' + (noteDate.getUTCMonth() + 1)).slice(-2)}-${('0' + noteDate.getUTCDate()).slice(-2)}`;

				return noteDateString === searchDateString;
			});
		} else {
			this.ngOnInit();
		}
	}

	currentPage = 1;
	notesPerPage = 10;

	Math = Math;

	changePage(page: number) {
		this.currentPage = page;
	}

}

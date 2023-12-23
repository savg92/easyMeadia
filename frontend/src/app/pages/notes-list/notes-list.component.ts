import { Component } from '@angular/core';
import { NOTES } from 'src/notes';
import { AllMessagesService } from '../../services/allPublications/all-messages.service';

@Component({
	selector: 'app-notes-list',
	templateUrl: './notes-list.component.html',
	styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent {
	constructor(private allMessages: AllMessagesService) {}
	notes = NOTES;

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
}

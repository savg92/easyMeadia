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
}

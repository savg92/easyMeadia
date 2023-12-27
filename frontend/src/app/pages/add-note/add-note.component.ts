import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NOTES } from '../../../notes';
import { Router } from '@angular/router';
import { AddMessageService } from 'src/app/services/addMessage/add-message.service';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
	iat: number;
	exp: number;
	data: {
		id: number;
		type: string;
	};
};
@Component({
	selector: 'app-add-note',
	templateUrl: './add-note.component.html',
	styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
	constructor(private addMessageService: AddMessageService) {}

	noteTitle = 'Your post title';
	noteText = 'Create message for share with your friends.';

	// time and short date
	date = new Date();
	formattedDate =
		this.date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		}) +
		' ' +
		this.date
			.toLocaleDateString('en-US', {
				year: '2-digit',
				month: '2-digit',
				day: '2-digit',
			})
			.replace(/\//g, '-');

	// user name
	user = 'User';

	// form validation
	addNoteForm = new FormGroup({
		title: new FormControl('', Validators.required),
		text: new FormControl(''),
	});

	// decode token for get user id
	private decoded = jwtDecode<JwtPayload>(localStorage.getItem('token') ?? '');

	// router for redirect
	router = inject(Router);

	addNote() {
		let title = this.addNoteForm.value.title ?? '';
		let text = this.addNoteForm.value.text ?? '';

		if (this.addNoteForm.valid) {
			let newNote = {
				title: title,
				body: text,
				UserId: this.decoded.data.id,
			};

			try {
				this.addMessageService.addMessage(newNote).subscribe(
					(res: any) => {
						console.log(res);
					},
					(error) => {
						console.log(error);
						console.log(newNote);
					}
				);
			} catch (error) {
				console.log(error);
			}

			this.addNoteForm.reset();
			this.router.navigateByUrl('/notes');
		}
	}
}

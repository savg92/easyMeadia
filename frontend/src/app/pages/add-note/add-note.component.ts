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
		name: string;
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

	// dialog
	isDialogOpen = false;
	dialogMessage = '';
	dialogImg = '';
	// isDialogOpen = true;
	// dialogMessage = 'Post Created';
	// dialogImg = '../../../assets/noteCreated.svg';

	closeDialog() {
		this.addNoteForm.reset();
		this.isDialogOpen = false;
		this.router.navigateByUrl('/notes');
	}

	addNote() {
		let title = this.addNoteForm.value.title ?? '';
		let text = this.addNoteForm.value.text ?? '';

		if (this.addNoteForm.valid) {
			let newNote = {
				title: title,
				body: text,
				UserId: this.decoded.data.id,
			};

			this.isDialogOpen = true;

			try {
				this.addMessageService.addMessage(newNote).subscribe(
					(res: any) => {
						// this.addNoteForm.reset();
						// this.router.navigateByUrl('/notes');
						this.dialogMessage = 'Post Created';
						this.dialogImg = '../../../assets/noteCreated.svg';
					},
					(error) => {
						console.log(error);
						console.log(newNote);
						this.dialogMessage = 'Uppss Try Later';
						this.dialogImg = '../../../assets/noteErrorCreate.svg';
					}
				);
			} catch (error) {
				console.log(error);
			}
		}
	}
}
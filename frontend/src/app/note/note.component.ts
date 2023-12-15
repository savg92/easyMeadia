import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
	@Input() noteTitle?: string = '';
	@Input() noteText?: string = '';
	@Input() formattedDate?: string = '';
	@Input() user?: string = '';
}

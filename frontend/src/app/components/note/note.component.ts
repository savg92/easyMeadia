import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.scss'],
	providers: [DatePipe]  // Add DatePipe to the component providers
})
export class NoteComponent implements OnInit {
	@Input() noteTitle?: string = '';
	@Input() noteText?: string = '';
	@Input() date?: string | null = '';
	@Input() user?: string = '';

	constructor(private datePipe: DatePipe) {}

	ngOnInit(): void {
		if (this.date && !isNaN(Date.parse(this.date))) {
			const transformedDate = this.datePipe.transform(
				new Date(this.date),
				'h:mm a dd-MM-yy'
			);
			this.date = transformedDate ? transformedDate : this.date;
		}
	}
}
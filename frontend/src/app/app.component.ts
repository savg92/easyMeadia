import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'my-app';

	ngOnInit(): void {
		initFlowbite();
	}
}

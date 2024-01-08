import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddNoteComponent} from './admin-add-note/admin-add-note.component';
import { AdminMyNotesComponent } from './admin-my-notes/admin-my-notes.component';
import { AdminNotesListComponent } from './admin-notes-list/admin-notes-list.component';

import { authGuard } from '../auth/auth.guard';
import { NotesListComponent } from '../pages/notes-list/notes-list.component';
import { AddNoteComponent } from '../pages/add-note/add-note.component';
import { MyMessagesComponent } from '../pages/my-messages/my-messages.component';


const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [authGuard],
		children: [
			{
				path: '',
				canActivateChild: [authGuard],
				children: [
					// { path: 'add-note', component: AdminAddNoteComponent },
					// { path: 'my-notes', component: AdminMyNotesComponent },
					// { path: 'notes-list', component: AdminNotesListComponent },
					{ path: 'add-note', component: AddNoteComponent },
					{ path: 'my-notes', component: MyMessagesComponent },
					{ path: 'notes-list', component: NotesListComponent },
					{ path: '', component: AdminDashboardComponent },
				],
			},
		],
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}

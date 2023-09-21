import { Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './auth/login/login.component';

const routeConfig: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', title: 'Home page', component: HomeComponent },
	{ path: 'sign-up', title: 'Sing Up', component: SingUpComponent },
	{ path: 'notes', title: 'Notes List', component: NotesListComponent },
	{ path: 'add-note', title: 'Add Note', component: AddNoteComponent },
	{ path: 'form', title: 'Form', component: FormComponent },
	{ path: 'note/:id', component: NoteDetailComponent },
	{ path: '**', redirectTo: 'home' },
];

export default routeConfig;

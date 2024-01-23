import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { FormComponent } from './components/form/form.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LoginComponent } from './pages/login/login.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';

// const routeConfig: Routes = [
// 	{ path: '', redirectTo: 'home', pathMatch: 'full' },
// 	{ path: 'login', component: LoginComponent },
// 	{ path: 'sign-up', title: 'Sing Up', component: SingUpComponent },
// 	{ path: 'home', title: 'Home page', component: HomeComponent },
// 	{ path: 'add-note', title: 'Add Note', component: AddNoteComponent },
// 	{ path: 'my-notes', title: 'myNotes', component: MyMessagesComponent },
// 	{ path: 'notes', title: 'Notes List', component: NotesListComponent },
// 	{ path: 'form', title: 'Form', component: FormComponent },
// 	{ path: '**', redirectTo: 'home' },
// ];
import { AuthGuard } from './services/AuthGuard';
import { inject } from '@angular/core';

const routeConfig: Routes = [
	{ path: '', redirectTo: 'add-note', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'sign-up', title: 'Sing Up', component: SingUpComponent },
	{ path: 'home', title: 'Home page', component: HomeComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
	{ path: 'add-note', title: 'Add Note', component: AddNoteComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
	{ path: 'my-notes', title: 'myNotes', component: MyMessagesComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
	{ path: 'notes', title: 'Notes List', component: NotesListComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
	// { path: 'form', title: 'Form', component: FormComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
	{ path: '**', redirectTo: 'add-note' },
];

export default routeConfig;
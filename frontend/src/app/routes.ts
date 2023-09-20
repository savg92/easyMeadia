import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routeConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home page', component: HomeComponent },
  { path: 'notes', title: 'Notes List', component: NotesListComponent },
  { path: 'form', title: 'Form', component: FormComponent },
  { path: 'add-note', title: 'Add Note', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: '**', redirectTo: 'home' },
];

export default routeConfig;
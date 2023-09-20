import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import routeConfig from './routes';
import { NoteDetailComponent } from './note-detail/note-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    FormComponent,
    AddNoteComponent,
    NoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

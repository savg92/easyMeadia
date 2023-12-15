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
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { OtherComponent } from './other/other.component';
// import { SingInComponent } from './sing-in/sing-in.component';

import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		NotesListComponent,
		FormComponent,
		AddNoteComponent,
		NoteDetailComponent,
		WelcomeImageComponent,
		SignInFormComponent,
		SingUpFormComponent,
		SingUpComponent,
		OtherComponent,
		LoginComponent,
  NoteComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routeConfig),
		AdminModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [RouterModule],
})
export class AppModule {}

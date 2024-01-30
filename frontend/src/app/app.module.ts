import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import routeConfig from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeImageComponent } from './components/welcome-image/welcome-image.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { FormComponent } from './components/form/form.component';
// import { NoteDetailComponent } from './note-detail/note-detail.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { OtherComponent } from './other/other.component';

import { LoginComponent } from './pages/login/login.component';

import { NoteComponent } from './components/note/note.component';

import { RegisterService } from './services/register/register.service';
import { LoginService } from './services/login/login.service';
import { AllMessagesService } from './services/allMessages/all-messages.service';
import { AddMessageService } from './services/addMessage/add-message.service';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		NotesListComponent,
		FormComponent,
		AddNoteComponent,
		WelcomeImageComponent,
		SignInFormComponent,
		SingUpFormComponent,
		SingUpComponent,
		OtherComponent,
		LoginComponent,
		NoteComponent,
		MyMessagesComponent,
  		PaginationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routeConfig),
		HttpClientModule,
	],
	providers: [
		RegisterService,
		LoginService,
		AllMessagesService,
		AddMessageService,
		AllMessagesService,
	],
	bootstrap: [AppComponent],
	exports: [RouterModule],
})
export class AppModule {}

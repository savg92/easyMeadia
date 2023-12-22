import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import routeConfig from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormComponent } from './form/form.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SingUpFormComponent } from './sing-up-form/sing-up-form.component';
import { OtherComponent } from './other/other.component';
// import { SingInComponent } from './sing-in/sing-in.component';

import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';

import { NoteComponent } from './note/note.component';

import { RegisterService } from './services/register/register.service';
import { LoginService } from './services/login/login.service';
import { AllMessagesService } from './services/allMessages/all-messages.service';

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
	providers: [RegisterService, LoginService, AllMessagesService],
	bootstrap: [AppComponent],
	exports: [RouterModule],
})
export class AppModule {}

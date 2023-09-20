import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublishComponent } from './components/publish/publish.component';
import { SearchComponent } from './components/search/search.component';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessagesComponent,
    NavbarComponent,
    PublishComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'publish', component: PublishComponent },
      { path: 'search', component: SearchComponent }
    ])
  ],
  providers: [
    AuthService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
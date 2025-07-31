import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Server } from './server/server';
import { FormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { Posts } from './post/post';
import { Child } from './child/child';
import { DateUser } from './date-user/date-user';

@NgModule({
  declarations: [
    App,
    Server,
    Navbar,
    Posts,
    Child,
    DateUser,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }

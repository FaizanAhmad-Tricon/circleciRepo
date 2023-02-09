import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';

import {MatButtonModule}  from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

 

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
         SignupComponent,
         HomeComponent,
         AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SignupComponent } from './signup/signup.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { HallticketComponent } from './hallticket/hallticket.component';
import { ResultComponent } from './result/result.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { MarqueeComponent } from './marquee/marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    AdvertisementComponent,
    SignupComponent,
    SyllabusComponent,
    HallticketComponent,
    ResultComponent,
    ContactusComponent,
    LoginComponent,
    AlertComponent,
    MarqueeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

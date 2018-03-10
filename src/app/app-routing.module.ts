import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import {ContactusComponent} from './contactus/contactus.component';
import {SignupComponent} from './signup/signup.component';
import {HallticketComponent} from './hallticket/hallticket.component';
import {ResultComponent} from './result/result.component';
import {LoginComponent} from './login/login.component';
import {SyllabusComponent} from './syllabus/syllabus.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'advertise',
  component: AdvertisementComponent
},
{
  path: 'hallticket',
  component: HallticketComponent
},
{
  path: 'result',
  component: ResultComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'contact',
  component: ContactusComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'syllabus',
  component: SyllabusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }

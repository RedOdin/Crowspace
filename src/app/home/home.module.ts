import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { HomeDataService } from './home-data.service';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    FaqComponent,
    TermsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HomeDataService
  ]
})
export class HomeModule { }

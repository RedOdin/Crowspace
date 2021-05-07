import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UsersDataService } from './users-data.service';
import { UsersRoutingModule } from './users-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserCampaignsComponent } from './user-campaigns/user-campaigns.component';
import { UserNewsComponent } from './user-news/user-news.component';

@NgModule({
  declarations: [
    UserComponent,
    UserCampaignsComponent,
    UserNewsComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    BrowserModule
  ],
  exports: [
  ],
  providers: [
    UsersDataService
  ]
})
export class UsersModule { }

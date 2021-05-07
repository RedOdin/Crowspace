import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AccountDataService } from './account-data.service';
import { ManageBalanceComponent } from './manage-balance/manage-balance.component';
import { SettingsComponent } from './settings/settings.component';
import { MyPurchasedProjectsComponent } from './my-purchased-projects/my-purchased-projects.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AccountComponent,
    MyProjectsComponent,
    ManageBalanceComponent,
    SettingsComponent,
    MyPurchasedProjectsComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AccountRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [
    AccountDataService
  ]
})
export class AccountModule { }

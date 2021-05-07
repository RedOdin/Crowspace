import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ManageBalanceComponent } from './manage-balance/manage-balance.component';
import { SettingsComponent } from './settings/settings.component';
import { MyPurchasedProjectsComponent } from './my-purchased-projects/my-purchased-projects.component';
import { PurchasesComponent } from './purchases/purchases.component';


const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'my-projects',
        component: MyProjectsComponent
      },
      {
        path: 'balance',
        component: ManageBalanceComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'my-purchased-projects',
        component: MyPurchasedProjectsComponent
      },
      {
        path: 'purchases',
        component: PurchasesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

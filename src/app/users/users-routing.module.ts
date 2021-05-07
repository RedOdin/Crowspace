import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserCampaignsComponent } from './user-campaigns/user-campaigns.component';
import { UserNewsComponent } from './user-news/user-news.component';

const routes: Routes = [
  {
    path: 'users/:id',
    component: UserComponent,
    children: [
      {
        path: 'campaigns',
        component: UserCampaignsComponent
      },
      {
        path: 'news',
        component: UserNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

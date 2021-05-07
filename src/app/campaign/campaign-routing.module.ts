import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingRulesComponent } from './funding-rules/funding-rules.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardComponent } from './reward/reward.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignRewardsComponent } from './campaign-rewards/campaign-rewards.component';
import { CampaignCommentsComponent } from './campaign/campaign-comments/campaign-comments.component';
import { CampaignLikesComponent } from './campaign/campaign-likes/campaign-likes.component';
import { CampaignBackersComponent } from './campaign/campaign-backers/campaign-backers.component';


const routes: Routes = [
  {
    path: 'funding-rules',
    component: FundingRulesComponent
  },
  {
    path: 'campaigns/:id/edit',
    component: EditCampaignComponent
  },
  {
    path: 'rewards',
    component: RewardsComponent
  },
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'campaigns/:linkCampaign',
    component: CampaignComponent,
    children: [
      {
        path: 'comments',
        component: CampaignCommentsComponent
      },
      {
        path: 'likes',
        component: CampaignLikesComponent
      },
      {
        path: 'backers',
        component: CampaignBackersComponent
      }
    ]
  },
  {
    path: 'campaigns/:linkCampaign/donate',
    component: CampaignRewardsComponent
  },
  {
    path: 'campaigns/:linkCampaign/donate-single/:idReward',
    component: RewardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

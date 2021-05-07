import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FundingRulesComponent } from './funding-rules/funding-rules.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { DataService } from './data.service';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardComponent } from './reward/reward.component';
import { FormsModule } from '@angular/forms';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignRewardsComponent } from './campaign-rewards/campaign-rewards.component';
import { CampaignCommentsComponent } from './campaign/campaign-comments/campaign-comments.component';
import { CampaignLikesComponent } from './campaign/campaign-likes/campaign-likes.component';
import { CampaignBackersComponent } from './campaign/campaign-backers/campaign-backers.component';

@NgModule({
  declarations: [
    FundingRulesComponent,
    EditCampaignComponent,
    RewardsComponent,
    RewardComponent,
    CampaignsComponent,
    CampaignComponent,
    CampaignRewardsComponent,
    CampaignCommentsComponent,
    CampaignLikesComponent,
    CampaignBackersComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CampaignRoutingModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [ DataService ]
})
export class CampaignModule { }

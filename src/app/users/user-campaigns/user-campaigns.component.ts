import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';
import { ICampaignModel } from '../models/campaign.model';
import { ICampaignRewardModel } from '../../campaign/models/campaignReward.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent implements OnInit {

  public campaigns: ICampaignModel[];

  constructor(private readonly usersDataService: UsersDataService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.usersDataService.getCampaigns().subscribe((campaigns: ICampaignModel[]) => {
      this.campaigns = campaigns;
    });
  }

  public getProgress(campaign: ICampaignModel): number {
    return Math.trunc(campaign.moneyPledged / campaign.financialGoal * 100);
  }

  public showCampaign(campaign: ICampaignModel): void {
    this.router.navigate([`campaigns/${campaign.linkCampaign}`])
  }
}

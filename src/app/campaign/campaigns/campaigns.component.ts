import { Component, OnInit } from '@angular/core';
import { IRewardModel } from '../models/rewards.model';
import { FILTER_CAMPAIGNS } from '../rewards/rewards.constant';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ICampaignModel } from '../models/campaign.model';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  public campaigns: ICampaignModel[];
  public filterCampaigns = ['All campaigns', 'Last updated', 'New campaigns', 'Close to completion'];
  public filterCountries = ['Choose country', 'Russia', 'Belarus', 'Egypt'];
  public categories = ['All categories', 'Business', 'Food', 'Games', 'Science & Education', 'Music', 'Movies & Videos', 'Charity'];

  constructor(private readonly dataService: DataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.dataService.getCampaigns().subscribe((campaigns: ICampaignModel[]) => {
      this.campaigns = campaigns;
    })
  }

  public viewCampaign(campaign: ICampaignModel): void {
    this.router.navigate([`campaigns/${campaign.linkCampaign}`]);
  }

  public getProgress(campaign: ICampaignModel): number {
    return Math.trunc(campaign.moneyPledged / campaign.financialGoal * 100);
  }

}

import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { ICampaignsUserModel } from '../models/campaigns-user.model';
import { ICampaignModel } from '../../campaign/models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  public campaigns: ICampaignsUserModel[];

  constructor(private readonly accountDataService: AccountDataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.accountDataService.getCampaignsUser()
      .subscribe((campaigns: ICampaignsUserModel[]) => {
        this.campaigns = campaigns;
      })
  }

  public getProgress(campaign: ICampaignsUserModel): number {
    return Math.trunc(campaign.moneyPledged / campaign.financialGoal * 100);
  }

  public viewCampaign(campaign: ICampaignsUserModel): void {
    this.router.navigate([`/campaigns/${campaign.linkCampaign}`])
  }
}

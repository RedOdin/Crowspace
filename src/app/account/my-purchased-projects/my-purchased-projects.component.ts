import { Component, OnInit } from '@angular/core';
import { ICampaignsUserModel } from '../models/campaigns-user.model';
import { AccountDataService } from '../account-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-purchased-projects',
  templateUrl: './my-purchased-projects.component.html',
  styleUrls: ['./my-purchased-projects.component.scss']
})
export class MyPurchasedProjectsComponent implements OnInit {

  public campaigns: ICampaignsUserModel[];

  constructor(private readonly accountDataService: AccountDataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.accountDataService.getCampaignsUser()
      .subscribe((campaigns: ICampaignsUserModel[]) => {
        this.campaigns = campaigns;
      })
  }

  public showCampaign(campaign: ICampaignsUserModel): void {
    this.router.navigate([`/campaigns/${campaign.linkCampaign}`])
  }
}

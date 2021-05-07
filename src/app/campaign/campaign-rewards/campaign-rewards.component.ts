import { Component, OnInit } from '@angular/core';
import { IRewardModel } from '../models/rewards.model';
import { ICampaignRewardModel } from '../models/campaignReward.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { IRewardPurchasedModel } from '../../account/models/rewad-purchased.model';

@Component({
  selector: 'app-campaign-rewards',
  templateUrl: './campaign-rewards.component.html',
  styleUrls: ['./campaign-rewards.component.scss']
})
export class CampaignRewardsComponent implements OnInit {

  public rewards: IRewardModel[];
  public campaign: ICampaignRewardModel;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly dataService: DataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.dataService.getRewards()
      .subscribe((rewards: IRewardModel[]) => {
        this.rewards = rewards;
      })

    this.dataService.getCampaign(this.activatedRoute.snapshot.params['linkCampaign'])
      .subscribe((campaign: ICampaignRewardModel) => {
        this.campaign = campaign;
      })
  }

  public showReward(reward: IRewardModel): void {
    this.router.navigate([`/campaigns/wetnose/donate-single/${reward.id}`])
  }

}

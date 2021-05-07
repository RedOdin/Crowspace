import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IRewardModel } from '../models/rewards.model';
import { FILTER_CAMPAIGNS } from './rewards.constant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  public rewards: IRewardModel[];
  public filterCampaigns = FILTER_CAMPAIGNS;

  constructor(private readonly dataService: DataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.dataService.getRewards().subscribe((rewards: IRewardModel[]) => {
      this.rewards = rewards;
    })
  }

  public viewReward(reward: IRewardModel): void {
    this.router.navigate([`campaigns/${reward.linkCampaign}/donate-single/${reward.id}`]);
  }

  public showCampaign(reward: IRewardModel): void {
    this.router.navigate([`campaigns/${reward.linkCampaign}`]);
  }
}

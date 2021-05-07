import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRewardModel } from '../models/rewards.model';
import { DataService } from '../data.service';
import { ICampaignRewardModel } from '../models/campaignReward.model';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  public reward: IRewardModel;
  public campaign: ICampaignRewardModel;
  public totalCost: number;
  public isHelp = false;
  public countReward: number;
  private maxCost = 100000;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly dataService: DataService) { }

  ngOnInit() {
    this.dataService.getReward(this.activatedRoute.snapshot.params['idReward'])
      .subscribe((reward: IRewardModel) => {
        this.reward = reward;
        this.totalCost = reward.cost;
        this.countReward = Math.trunc(this.totalCost / reward.cost);
      })

    this.dataService.getCampaign(this.activatedRoute.snapshot.params['linkCampaign'])
      .subscribe((campaign: ICampaignRewardModel) => {
        this.campaign = campaign;
      })
  }

  public downTotalCost(): void {
    if (this.totalCost > this.reward.cost) {
      this.totalCost -= this.reward.cost;
    }
    this.checkTotalCost();
  }

  public upTotalCost(): void {
    this.totalCost = +this.totalCost;
    this.totalCost += this.reward.cost;
    this.checkTotalCost();
  }

  public checkTotalCost(): void {
    this.isHelp = this.totalCost < this.reward.cost;
    this.countReward = Math.trunc(this.totalCost / this.reward.cost);
    this.totalCost = this.totalCost <= this.maxCost ? this.totalCost : this.maxCost;
  }

}

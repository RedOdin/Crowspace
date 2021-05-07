import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRewardModel } from '../models/rewards.model';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {

  public idCampaign: number;
  public rewards: IRewardModel[] = [{}];

  constructor(private readonly activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idCampaign = this.activateRoute.snapshot.params['id'];
  }

  public addReward(): void {
    this.rewards.push({id: 123});
  }

  public deleteReward(reward: IRewardModel): void {
    this.rewards.splice(0,1);
  }
}

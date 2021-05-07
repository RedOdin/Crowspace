import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { Router } from '@angular/router';
import { IRewardPurchasedModel } from '../models/rewad-purchased.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  public rewards: IRewardPurchasedModel[];

  constructor(private readonly accountDataService: AccountDataService,
              private readonly router: Router) { }

  ngOnInit() {
    this.accountDataService.getRewardsPurchased()
      .subscribe((rewards: IRewardPurchasedModel[]) => {
        this.rewards = rewards;
      })
  }

  public showReward(reward: IRewardPurchasedModel): void {
    this.router.navigate([`/campaigns/wetnose/donate-single/${reward.id}`])
  }
}

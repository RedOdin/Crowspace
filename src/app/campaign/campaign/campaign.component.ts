import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICampaignRewardModel } from '../models/campaignReward.model';
import { DomSanitizer } from '@angular/platform-browser';
import { IUserModel } from '../../home/models/user.model';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  public campaign: ICampaignRewardModel;
  public user: IUserModel;
  public iframe;
  public isLike = false;

  constructor(private readonly dataService: DataService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly sanitizer: DomSanitizer,
              private readonly router: Router) { }

  ngOnInit() {
    this.dataService.getCampaign(this.activatedRoute.snapshot.params['linkCampaign'])
      .subscribe((campaign: ICampaignRewardModel) => {
        this.campaign = campaign;
        this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.campaign.video);
        this.getUser(campaign.user_id);
      })
  }

  public getProgress(campaign: ICampaignRewardModel): number {
    return Math.trunc(campaign.money_pledged / campaign.financial_goal * 100);
  }

  public getUser(id: number): void {
    this.dataService.getUser(id)
      .subscribe((user: IUserModel) => {
        this.user = user;
      })
  }

  public showMyPage(id: number): void {
    this.router.navigate([`users/${id}/campaigns`])
  }

  public like(): void{
    this.isLike = true;
  }

  public dislike(): void{
    this.isLike = false;
  }
}

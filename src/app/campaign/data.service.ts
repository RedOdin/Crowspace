import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRewardModel } from './models/rewards.model';
import { ICampaignRewardModel } from './models/campaignReward.model';
import { ICampaignModel } from './models/campaign.model';
import { IUserModel } from '../home/models/user.model';

@Injectable()
export class DataService{

  private options = {
    withCredentials: true
  }

  constructor(private readonly httpClient: HttpClient){
  }

  public createCampaign(): Observable<number> {
    return of (
        462
    )
  }

  public getReward(id: number): Observable<IRewardModel> {
    return this.httpClient.get<IRewardModel>(`http://localhost:3000/rewards/${id}`, this.options);
  }

  public getRewards(): Observable<IRewardModel[]> {
    return this.httpClient.get<IRewardModel[]>('http://localhost:3000/rewards', this.options);
  }

  public getCampaign(linkCampaign: string): Observable<ICampaignRewardModel> {
    return this.httpClient.get<ICampaignRewardModel>(`http://localhost:3000/campaigns/${linkCampaign}`, this.options);
  }

  public getCampaigns(): Observable<ICampaignModel[]> {
    return this.httpClient.get<ICampaignModel[]>(`http://localhost:3000/campaigns`, this.options);
  }

  public getUser(id: number): Observable<IUserModel> {
    return this.httpClient.get<IUserModel>(`http://localhost:3000/users/${id}`, this.options);
  }

  public getUsers(): Observable<IUserModel[]> {
    return this.httpClient.get<IUserModel[]>(`http://localhost:3000/users`, this.options);
  }
}

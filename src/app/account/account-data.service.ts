import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISelfUserModel } from './models/self-user.model';
import { ISettingsUserModel } from './models/settings-user.model';
import { ICampaignsUserModel } from './models/campaigns-user.model';
import { IRewardPurchasedModel } from './models/rewad-purchased.model';

@Injectable()
export class AccountDataService{

  private options = {
    withCredentials: true
  }

  constructor(private readonly httpClient: HttpClient){
  }

  public getSelfUser(): Observable<ISelfUserModel> {
    return this.httpClient.get<ISelfUserModel>(`http://localhost:3000/account`, this.options);
  }

  public getSettingsUser(): Observable<ISettingsUserModel> {
    return this.httpClient.get<ISettingsUserModel>(`http://localhost:3000/account/settings`, this.options);
  }

  public postAmount(amount: number): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/account/balance`, { amount }, this.options);
  }

  public getCampaignsUser(): Observable<ICampaignsUserModel[]> {
    return this.httpClient.get<ICampaignsUserModel[]>(`http://localhost:3000/account/my-projects`, this.options);
  }

  public getRewardsPurchased(): Observable<IRewardPurchasedModel[]> {
    return this.httpClient.get<IRewardPurchasedModel[]>(`http://localhost:3000/rewards`, this.options);
  }
}

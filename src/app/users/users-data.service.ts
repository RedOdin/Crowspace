import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICampaignModel } from './models/campaign.model';
import { ISelfUserModel } from './models/self-user.model';

@Injectable()
export class UsersDataService{

  private options = {
    withCredentials: true
  }

  constructor(private readonly httpClient: HttpClient){
  }

  public getSelfUser(): Observable<ISelfUserModel> {
    return this.httpClient.get<ISelfUserModel>(`http://localhost:3000/account`, this.options);
  }

  public getCampaigns(): Observable<ICampaignModel[]> {
    return this.httpClient.get<ICampaignModel[]>(`http://localhost:3000/campaigns`, this.options);
  }

}

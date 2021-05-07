import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserModel } from './models/user.model';

@Injectable()
export class HomeDataService{

  constructor(private readonly httpClient: HttpClient){
  }

  public registration(user: IUserModel): Observable<any> {
    return this.httpClient.post('http://localhost:3000/sign-up', user, {withCredentials: true})
  }

  public login(user: IUserModel): Observable<any> {
    return this.httpClient.post('http://localhost:3000/sign-in', user, {withCredentials: true})
  }
}

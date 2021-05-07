import { Component, OnInit } from '@angular/core';
import { AccountDataService } from './account-data.service';
import { ISelfUserModel } from './models/self-user.model';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: ISelfUserModel;

  constructor(private readonly accountDataService: AccountDataService,
              private readonly cookieService: CookieService,
              private readonly router: Router) { }

  ngOnInit() {
    this.accountDataService.getSelfUser()
      .subscribe((user: ISelfUserModel) => {
        this.user = user;
        if (this.router.url === '/account') {
          this.router.navigate(['account/my-projects']);
        }
      })
  }

  public exit(): void {
    this.cookieService.delete('USER');
  }

  public showMyPage(): void {
    this.router.navigate([`users/${this.user.id}/campaigns`])
  }
}

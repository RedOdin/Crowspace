import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IUserModel } from '../models/user.model';
import { HomeDataService } from '../home-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public user: IUserModel = {
    email: '',
    password: ''
  };

  constructor(private readonly homeDataService: HomeDataService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  public signIn(): void {
    this.homeDataService.login(this.user).subscribe(() => {
      this.router.navigate(['/account']);
    });
  }
}

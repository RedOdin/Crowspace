import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { IUserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: IUserModel = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private readonly homeDataService: HomeDataService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  public signUp(): void {
    this.homeDataService.registration({ email: this.user.email, password: this.user.password})
      .subscribe(() => {
          this.router.navigate(['/sign-in'])
        }
      )
  }

}

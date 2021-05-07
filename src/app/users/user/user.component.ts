import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';
import { ISelfUserModel } from '../models/self-user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: ISelfUserModel;

  constructor(private readonly usersDataService: UsersDataService) { }

  ngOnInit(): void {
    this.usersDataService.getSelfUser().subscribe((user: ISelfUserModel) => {
      this.user = user;
    });
  }
}

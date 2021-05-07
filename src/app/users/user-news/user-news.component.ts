import { Component, OnInit } from '@angular/core';
import { ISelfUserModel } from '../models/self-user.model';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.scss']
})
export class UserNewsComponent implements OnInit {

  public newsCampaign = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'];

  public user: ISelfUserModel;

  constructor(private readonly usersDataService: UsersDataService) { }

  ngOnInit(): void {
    this.usersDataService.getSelfUser().subscribe((user: ISelfUserModel) => {
      this.user = user;
    });
  }

}

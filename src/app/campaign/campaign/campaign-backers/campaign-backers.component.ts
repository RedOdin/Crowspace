import { Component, OnInit } from '@angular/core';
import { IUserModel } from '../../../home/models/user.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-campaign-backers',
  templateUrl: './campaign-backers.component.html',
  styleUrls: ['./campaign-backers.component.scss']
})
export class CampaignBackersComponent implements OnInit {

  public users: IUserModel[];

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((users: IUserModel[]) => {
      this.users = users;
    })
  }

}

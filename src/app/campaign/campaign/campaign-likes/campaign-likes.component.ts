import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { IUserModel } from '../../../home/models/user.model';

@Component({
  selector: 'app-campaign-likes',
  templateUrl: './campaign-likes.component.html',
  styleUrls: ['./campaign-likes.component.scss']
})
export class CampaignLikesComponent implements OnInit {

  public users: IUserModel[];

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((users: IUserModel[]) => {
      this.users = users;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { IUserModel } from '../../../home/models/user.model';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-campaign-comments',
  templateUrl: './campaign-comments.component.html',
  styleUrls: ['./campaign-comments.component.scss'],
  animations: [trigger('openClose', [
    state('open', style({
      height: '2rem'
    })),
    state('closed', style({
      height: '0',
      opacity: 0
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),]
})
export class CampaignCommentsComponent implements OnInit {

  public commentsUsers = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'];

  public user: IUserModel;
  public isShowSend = false;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUser(1).subscribe((user: IUserModel) => {
      this.user = user;
    });
  }

  public showSend(): void{
    this.isShowSend = true;
  }

  public hideSend(): void{
    this.isShowSend = false;
  }

}

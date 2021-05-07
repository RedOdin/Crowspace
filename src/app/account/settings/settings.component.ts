import { Component, OnInit } from '@angular/core';
import { ISettingsUserModel } from '../models/settings-user.model';
import { AccountDataService } from '../account-data.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public user: ISettingsUserModel;

  constructor(private readonly accountDataService: AccountDataService,
              private readonly toastrService: NbToastrService) { }

  ngOnInit() {
    this.accountDataService.getSettingsUser()
      .subscribe((user: ISettingsUserModel) => {
        this.user = user;
      })
  }

  public saveChanges(): void {
    this.showToast();
  }

  private showToast() {
    this.toastrService.show(
      'Data has been changed',
      `Hurray!`,
      { status: 'danger' });
  }

}

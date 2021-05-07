import { Component, OnInit } from '@angular/core';
import { ISelfUserModel } from '../models/self-user.model';
import { AccountDataService } from '../account-data.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-manage-balance',
  templateUrl: './manage-balance.component.html',
  styleUrls: ['./manage-balance.component.scss']
})
export class ManageBalanceComponent implements OnInit {

  public amount: number;

  constructor(private readonly accountDataService: AccountDataService,
              private readonly toastrService: NbToastrService) { }

  ngOnInit() {
  }

  public replenish(): void {
    if (this.amount) {
      this.accountDataService.postAmount(this.amount).subscribe(() => {
        this.showToast('Balance replenished successfully');
        this.amount = null;
        }
      );
    }
  }

  private showToast(message: string) {
    this.toastrService.show(
      message,
      `Hurray!`,
      { status: 'danger' });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funding-rules',
  templateUrl: './funding-rules.component.html',
  styleUrls: ['./funding-rules.component.scss']
})
export class FundingRulesComponent implements OnInit {

  constructor(private readonly dataService: DataService,
              private readonly router: Router) {
  }

  ngOnInit() {
  }

  public createCampaign(): void {
    this.dataService.createCampaign()
      .subscribe((id: number) => {
        this.router.navigate([`campaigns/${id}/edit`]);
      })
  }
}

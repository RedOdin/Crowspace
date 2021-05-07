import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRewardsComponent } from './campaign-rewards.component';

describe('CampaignRewardsComponent', () => {
  let component: CampaignRewardsComponent;
  let fixture: ComponentFixture<CampaignRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

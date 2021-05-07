import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignBackersComponent } from './campaign-backers.component';

describe('CampaignBackersComponent', () => {
  let component: CampaignBackersComponent;
  let fixture: ComponentFixture<CampaignBackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignBackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignBackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

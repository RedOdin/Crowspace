import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignLikesComponent } from './campaign-likes.component';

describe('CampaignLikesComponent', () => {
  let component: CampaignLikesComponent;
  let fixture: ComponentFixture<CampaignLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

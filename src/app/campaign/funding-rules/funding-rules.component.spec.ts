import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRulesComponent } from './funding-rules.component';

describe('FundingRulesComponent', () => {
  let component: FundingRulesComponent;
  let fixture: ComponentFixture<FundingRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

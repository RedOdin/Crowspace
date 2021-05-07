import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchasedProjectsComponent } from './my-purchased-projects.component';

describe('MyPurchasedProjectsComponent', () => {
  let component: MyPurchasedProjectsComponent;
  let fixture: ComponentFixture<MyPurchasedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPurchasedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

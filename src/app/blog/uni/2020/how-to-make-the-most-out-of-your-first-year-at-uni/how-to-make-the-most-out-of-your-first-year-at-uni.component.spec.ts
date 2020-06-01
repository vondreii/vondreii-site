import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToMakeTheMostOutOfYourFirstYearAtUniComponent } from './how-to-make-the-most-out-of-your-first-year-at-uni.component';

describe('HowToMakeTheMostOutOfYourFirstYearAtUniComponent', () => {
  let component: HowToMakeTheMostOutOfYourFirstYearAtUniComponent;
  let fixture: ComponentFixture<HowToMakeTheMostOutOfYourFirstYearAtUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToMakeTheMostOutOfYourFirstYearAtUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToMakeTheMostOutOfYourFirstYearAtUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellbeingMainComponent } from './wellbeing-main.component';

describe('WellbeingMainComponent', () => {
  let component: WellbeingMainComponent;
  let fixture: ComponentFixture<WellbeingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellbeingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellbeingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

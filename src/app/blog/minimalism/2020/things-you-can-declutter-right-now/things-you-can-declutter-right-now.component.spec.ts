import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsYouCanDeclutterRightNowComponent } from './things-you-can-declutter-right-now.component';

describe('ThingsYouCanDeclutterRightNowComponent', () => {
  let component: ThingsYouCanDeclutterRightNowComponent;
  let fixture: ComponentFixture<ThingsYouCanDeclutterRightNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsYouCanDeclutterRightNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsYouCanDeclutterRightNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetRacingGameComponent } from './street-racing-game.component';

describe('StreetRacingGameComponent', () => {
  let component: StreetRacingGameComponent;
  let fixture: ComponentFixture<StreetRacingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetRacingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetRacingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

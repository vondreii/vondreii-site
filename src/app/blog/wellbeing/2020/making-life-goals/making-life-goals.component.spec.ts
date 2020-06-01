import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingLifeGoalsComponent } from './making-life-goals.component';

describe('MakingLifeGoalsComponent', () => {
  let component: MakingLifeGoalsComponent;
  let fixture: ComponentFixture<MakingLifeGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingLifeGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingLifeGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

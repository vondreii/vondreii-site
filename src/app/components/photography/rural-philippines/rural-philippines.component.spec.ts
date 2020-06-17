import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralPhilippinesComponent } from './rural-philippines.component';

describe('RuralPhilippinesComponent', () => {
  let component: RuralPhilippinesComponent;
  let fixture: ComponentFixture<RuralPhilippinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralPhilippinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralPhilippinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

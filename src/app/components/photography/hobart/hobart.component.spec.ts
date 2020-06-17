import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobartComponent } from './hobart.component';

describe('HobartComponent', () => {
  let component: HobartComponent;
  let fixture: ComponentFixture<HobartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterValleyComponent } from './hunter-valley.component';

describe('HunterValleyComponent', () => {
  let component: HunterValleyComponent;
  let fixture: ComponentFixture<HunterValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

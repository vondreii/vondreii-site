import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManilaComponent } from './manila.component';

describe('ManilaComponent', () => {
  let component: ManilaComponent;
  let fixture: ComponentFixture<ManilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

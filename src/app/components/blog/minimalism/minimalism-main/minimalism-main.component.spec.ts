import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalismMainComponent } from './minimalism-main.component';

describe('MinimalismMainComponent', () => {
  let component: MinimalismMainComponent;
  let fixture: ComponentFixture<MinimalismMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalismMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalismMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
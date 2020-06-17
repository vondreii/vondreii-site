import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniMainComponent } from './uni-main.component';

describe('UniMainComponent', () => {
  let component: UniMainComponent;
  let fixture: ComponentFixture<UniMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

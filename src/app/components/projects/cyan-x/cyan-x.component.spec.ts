import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyanXComponent } from './cyan-x.component';

describe('CyanXComponent', () => {
  let component: CyanXComponent;
  let fixture: ComponentFixture<CyanXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyanXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyanXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

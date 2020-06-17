import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCoastComponent } from './central-coast.component';

describe('CentralCoastComponent', () => {
  let component: CentralCoastComponent;
  let fixture: ComponentFixture<CentralCoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralCoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralCoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsToAvoidProcrastinatingComponent } from './tips-to-avoid-procrastinating.component';

describe('TipsToAvoidProcrastinatingComponent', () => {
  let component: TipsToAvoidProcrastinatingComponent;
  let fixture: ComponentFixture<TipsToAvoidProcrastinatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsToAvoidProcrastinatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsToAvoidProcrastinatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

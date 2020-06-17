import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsToBetterOrganiseYourComputerComponent } from './tips-to-better-organise-your-computer.component';

describe('TipsToBetterOrganiseYourComputerComponent', () => {
  let component: TipsToBetterOrganiseYourComputerComponent;
  let fixture: ComponentFixture<TipsToBetterOrganiseYourComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsToBetterOrganiseYourComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsToBetterOrganiseYourComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

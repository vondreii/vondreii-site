import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToBeMoreOrganisedComponent } from './ways-to-be-more-organised.component';

describe('WaysToBeMoreOrganisedComponent', () => {
  let component: WaysToBeMoreOrganisedComponent;
  let fixture: ComponentFixture<WaysToBeMoreOrganisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaysToBeMoreOrganisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysToBeMoreOrganisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

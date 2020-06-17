import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToOrganiseYourWebBrowsingComponent } from './how-to-organise-your-web-browsing.component';

describe('HowToOrganiseYourWebBrowsingComponent', () => {
  let component: HowToOrganiseYourWebBrowsingComponent;
  let fixture: ComponentFixture<HowToOrganiseYourWebBrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToOrganiseYourWebBrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToOrganiseYourWebBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

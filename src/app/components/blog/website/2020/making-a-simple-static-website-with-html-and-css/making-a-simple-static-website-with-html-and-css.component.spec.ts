import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingASimpleStaticWebsiteWithHtmlAndCssComponent } from './making-a-simple-static-website-with-html-and-css.component';

describe('MakingASimpleStaticWebsiteWithHtmlAndCssComponent', () => {
  let component: MakingASimpleStaticWebsiteWithHtmlAndCssComponent;
  let fixture: ComponentFixture<MakingASimpleStaticWebsiteWithHtmlAndCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingASimpleStaticWebsiteWithHtmlAndCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingASimpleStaticWebsiteWithHtmlAndCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

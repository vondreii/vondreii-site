import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingANewThemeInHugoComponent } from './creating-a-new-theme-in-hugo.component';

describe('CreatingANewThemeInHugoComponent', () => {
  let component: CreatingANewThemeInHugoComponent;
  let fixture: ComponentFixture<CreatingANewThemeInHugoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingANewThemeInHugoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingANewThemeInHugoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

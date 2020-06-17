import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMountainsComponent } from './blue-mountains.component';

describe('BlueMountainsComponent', () => {
  let component: BlueMountainsComponent;
  let fixture: ComponentFixture<BlueMountainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueMountainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

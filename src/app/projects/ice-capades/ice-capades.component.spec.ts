import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCapadesComponent } from './ice-capades.component';

describe('IceCapadesComponent', () => {
  let component: IceCapadesComponent;
  let fixture: ComponentFixture<IceCapadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCapadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCapadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

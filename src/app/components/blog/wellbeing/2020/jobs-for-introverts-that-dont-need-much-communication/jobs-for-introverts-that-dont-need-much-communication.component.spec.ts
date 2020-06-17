import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsForIntrovertsThatDontNeedMuchCommunicationComponent } from './jobs-for-introverts-that-dont-need-much-communication.component';

describe('JobsForIntrovertsThatDontNeedMuchCommunicationComponent', () => {
  let component: JobsForIntrovertsThatDontNeedMuchCommunicationComponent;
  let fixture: ComponentFixture<JobsForIntrovertsThatDontNeedMuchCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsForIntrovertsThatDontNeedMuchCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsForIntrovertsThatDontNeedMuchCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

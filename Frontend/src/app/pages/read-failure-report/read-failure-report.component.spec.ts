import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFailureReportComponent } from './read-failure-report.component';

describe('ReadFailureReportComponent', () => {
  let component: ReadFailureReportComponent;
  let fixture: ComponentFixture<ReadFailureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFailureReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFailureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

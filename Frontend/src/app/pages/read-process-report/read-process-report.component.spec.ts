import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProcessReportComponent } from './read-process-report.component';

describe('ReadProcessReportComponent', () => {
  let component: ReadProcessReportComponent;
  let fixture: ComponentFixture<ReadProcessReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProcessReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

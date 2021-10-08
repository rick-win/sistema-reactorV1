import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProductionReportComponent } from './read-production-report.component';

describe('ReadProductionReportComponent', () => {
  let component: ReadProductionReportComponent;
  let fixture: ComponentFixture<ReadProductionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProductionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProductionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

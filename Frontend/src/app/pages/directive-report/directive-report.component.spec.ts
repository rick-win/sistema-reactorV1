import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveReportComponent } from './directive-report.component';

describe('DirectiveReportComponent', () => {
  let component: DirectiveReportComponent;
  let fixture: ComponentFixture<DirectiveReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

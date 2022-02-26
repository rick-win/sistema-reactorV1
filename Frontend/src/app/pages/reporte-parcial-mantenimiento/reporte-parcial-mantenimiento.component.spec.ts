import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteParcialMantenimientoComponent } from './reporte-parcial-mantenimiento.component';

describe('ReporteParcialMantenimientoComponent', () => {
  let component: ReporteParcialMantenimientoComponent;
  let fixture: ComponentFixture<ReporteParcialMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteParcialMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteParcialMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

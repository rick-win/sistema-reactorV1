import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordReporteMantenimientoComponent } from './record-reporte-mantenimiento.component';

describe('RecordReporteMantenimientoComponent', () => {
  let component: RecordReporteMantenimientoComponent;
  let fixture: ComponentFixture<RecordReporteMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordReporteMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordReporteMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

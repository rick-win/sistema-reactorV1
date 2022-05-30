import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIngresoOperarioComponent } from './reporte-ingreso-operario.component';

describe('ReporteIngresoOperarioComponent', () => {
  let component: ReporteIngresoOperarioComponent;
  let fixture: ComponentFixture<ReporteIngresoOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteIngresoOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIngresoOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

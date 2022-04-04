import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProcesoOperarioComponent } from './reporte-proceso-operario.component';

describe('ReporteProcesoOperarioComponent', () => {
  let component: ReporteProcesoOperarioComponent;
  let fixture: ComponentFixture<ReporteProcesoOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteProcesoOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProcesoOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

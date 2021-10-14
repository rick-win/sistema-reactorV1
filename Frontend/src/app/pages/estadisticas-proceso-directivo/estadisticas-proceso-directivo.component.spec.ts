import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasProcesoDirectivoComponent } from './estadisticas-proceso-directivo.component';

describe('EstadisticasProcesoDirectivoComponent', () => {
  let component: EstadisticasProcesoDirectivoComponent;
  let fixture: ComponentFixture<EstadisticasProcesoDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasProcesoDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasProcesoDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

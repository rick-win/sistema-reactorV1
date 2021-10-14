import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasProduccionDirectivoComponent } from './estadisticas-produccion-directivo.component';

describe('EstadisticasProduccionDirectivoComponent', () => {
  let component: EstadisticasProduccionDirectivoComponent;
  let fixture: ComponentFixture<EstadisticasProduccionDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasProduccionDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasProduccionDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProduccionOperarioComponent } from './reporte-produccion-operario.component';

describe('ReporteProduccionOperarioComponent', () => {
  let component: ReporteProduccionOperarioComponent;
  let fixture: ComponentFixture<ReporteProduccionOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteProduccionOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProduccionOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

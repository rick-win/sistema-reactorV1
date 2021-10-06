import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteBitacoraEventosOperarioComponent } from './reporte-bitacora-eventos-operario.component';

describe('ReporteBitacoraEventosOperarioComponent', () => {
  let component: ReporteBitacoraEventosOperarioComponent;
  let fixture: ComponentFixture<ReporteBitacoraEventosOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteBitacoraEventosOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteBitacoraEventosOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

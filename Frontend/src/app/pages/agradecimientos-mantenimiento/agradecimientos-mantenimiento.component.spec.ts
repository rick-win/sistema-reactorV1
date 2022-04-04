import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimientosMantenimientoComponent } from './agradecimientos-mantenimiento.component';

describe('AgradecimientosMantenimientoComponent', () => {
  let component: AgradecimientosMantenimientoComponent;
  let fixture: ComponentFixture<AgradecimientosMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgradecimientosMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientosMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

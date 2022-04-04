import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreProyectoMantenimientoComponent } from './sobre-proyecto-mantenimiento.component';

describe('SobreProyectoMantenimientoComponent', () => {
  let component: SobreProyectoMantenimientoComponent;
  let fixture: ComponentFixture<SobreProyectoMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreProyectoMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreProyectoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

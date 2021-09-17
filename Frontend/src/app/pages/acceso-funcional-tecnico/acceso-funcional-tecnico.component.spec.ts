import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoFuncionalTecnicoComponent } from './acceso-funcional-tecnico.component';

describe('AccesoFuncionalTecnicoComponent', () => {
  let component: AccesoFuncionalTecnicoComponent;
  let fixture: ComponentFixture<AccesoFuncionalTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoFuncionalTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoFuncionalTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

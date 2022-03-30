import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioIncidenciasComponent } from './fomulario-incidencias.component';

describe('FomularioIncidenciasComponent', () => {
  let component: FomularioIncidenciasComponent;
  let fixture: ComponentFixture<FomularioIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomularioIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomularioIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

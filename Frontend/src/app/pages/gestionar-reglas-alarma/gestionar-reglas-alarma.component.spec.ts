import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarReglasAlarmaComponent } from './gestionar-reglas-alarma.component';

describe('GestionarReglasAlarmaComponent', () => {
  let component: GestionarReglasAlarmaComponent;
  let fixture: ComponentFixture<GestionarReglasAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarReglasAlarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarReglasAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAlarmasComponent } from './gestionar-alarmas.component';

describe('GestionarAlarmasComponent', () => {
  let component: GestionarAlarmasComponent;
  let fixture: ComponentFixture<GestionarAlarmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarAlarmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

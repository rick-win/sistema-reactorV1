import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloMantenimientoComponent } from './desarrollo-mantenimiento.component';

describe('DesarrolloMantenimientoComponent', () => {
  let component: DesarrolloMantenimientoComponent;
  let fixture: ComponentFixture<DesarrolloMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

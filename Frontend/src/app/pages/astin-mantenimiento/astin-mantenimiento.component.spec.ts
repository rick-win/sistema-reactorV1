import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstinMantenimientoComponent } from './astin-mantenimiento.component';

describe('AstinMantenimientoComponent', () => {
  let component: AstinMantenimientoComponent;
  let fixture: ComponentFixture<AstinMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstinMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstinMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

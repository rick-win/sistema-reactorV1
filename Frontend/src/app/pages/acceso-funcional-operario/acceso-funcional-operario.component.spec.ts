import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoFuncionalOperarioComponent } from './acceso-funcional-operario.component';

describe('AccesoFuncionalOperarioComponent', () => {
  let component: AccesoFuncionalOperarioComponent;
  let fixture: ComponentFixture<AccesoFuncionalOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoFuncionalOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoFuncionalOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

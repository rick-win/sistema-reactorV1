import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoFuncionalDirectivoComponent } from './acceso-funcional-directivo.component';

describe('AccesoFuncionalDirectivoComponent', () => {
  let component: AccesoFuncionalDirectivoComponent;
  let fixture: ComponentFixture<AccesoFuncionalDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoFuncionalDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoFuncionalDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

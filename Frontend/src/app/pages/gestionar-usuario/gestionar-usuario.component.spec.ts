import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarUsuarioComponent } from './gestionar-usuario.component';

describe('GestionarUsuarioComponent', () => {
  let component: GestionarUsuarioComponent;
  let fixture: ComponentFixture<GestionarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

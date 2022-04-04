import { TestBed } from '@angular/core/testing';

import { GestionarUsuarioService } from './gestionar-usuario.service';

describe('GestionarUsuarioService', () => {
  let service: GestionarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

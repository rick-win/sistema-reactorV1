import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdMantenimientoComponent } from './cmd-mantenimiento.component';

describe('CmdMantenimientoComponent', () => {
  let component: CmdMantenimientoComponent;
  let fixture: ComponentFixture<CmdMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

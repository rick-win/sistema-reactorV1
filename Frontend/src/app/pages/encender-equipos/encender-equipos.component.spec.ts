import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncenderEquiposComponent } from './encender-equipos.component';

describe('EncenderEquiposComponent', () => {
  let component: EncenderEquiposComponent;
  let fixture: ComponentFixture<EncenderEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncenderEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncenderEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

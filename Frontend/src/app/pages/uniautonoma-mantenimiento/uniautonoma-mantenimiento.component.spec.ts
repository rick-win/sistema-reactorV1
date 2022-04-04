import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniautonomaMantenimientoComponent } from './uniautonoma-mantenimiento.component';

describe('UniautonomaMantenimientoComponent', () => {
  let component: UniautonomaMantenimientoComponent;
  let fixture: ComponentFixture<UniautonomaMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniautonomaMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniautonomaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

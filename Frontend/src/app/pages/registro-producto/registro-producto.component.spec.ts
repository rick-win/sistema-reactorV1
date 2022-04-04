import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductoComponent } from './registro-producto.component';

describe('RegistroProductoComponent', () => {
  let component: RegistroProductoComponent;
  let fixture: ComponentFixture<RegistroProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

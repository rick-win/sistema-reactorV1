import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargueMaterialComponent } from './cargue-material.component';

describe('CargueMaterialComponent', () => {
  let component: CargueMaterialComponent;
  let fixture: ComponentFixture<CargueMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargueMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargueMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

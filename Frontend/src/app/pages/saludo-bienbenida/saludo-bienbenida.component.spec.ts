import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoBienbenidaComponent } from './saludo-bienbenida.component';

describe('SaludoBienbenidaComponent', () => {
  let component: SaludoBienbenidaComponent;
  let fixture: ComponentFixture<SaludoBienbenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoBienbenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoBienbenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimientosDirectivoComponent } from './agradecimientos-directivo.component';

describe('AgradecimientosDirectivoComponent', () => {
  let component: AgradecimientosDirectivoComponent;
  let fixture: ComponentFixture<AgradecimientosDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgradecimientosDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientosDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

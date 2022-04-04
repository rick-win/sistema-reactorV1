import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreProyectoDirectivoComponent } from './sobre-proyecto-directivo.component';

describe('SobreProyectoDirectivoComponent', () => {
  let component: SobreProyectoDirectivoComponent;
  let fixture: ComponentFixture<SobreProyectoDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreProyectoDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreProyectoDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstinDirectivoComponent } from './astin-directivo.component';

describe('AstinDirectivoComponent', () => {
  let component: AstinDirectivoComponent;
  let fixture: ComponentFixture<AstinDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstinDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstinDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

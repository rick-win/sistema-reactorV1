import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniautonomaDirectivoComponent } from './uniautonoma-directivo.component';

describe('UniautonomaDirectivoComponent', () => {
  let component: UniautonomaDirectivoComponent;
  let fixture: ComponentFixture<UniautonomaDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniautonomaDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniautonomaDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

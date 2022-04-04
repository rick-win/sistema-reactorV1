import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloDirectivoComponent } from './desarrollo-directivo.component';

describe('DesarrolloDirectivoComponent', () => {
  let component: DesarrolloDirectivoComponent;
  let fixture: ComponentFixture<DesarrolloDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreElProyectoComponent } from './sobre-el-proyecto.component';

describe('SobreElProyectoComponent', () => {
  let component: SobreElProyectoComponent;
  let fixture: ComponentFixture<SobreElProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreElProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreElProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

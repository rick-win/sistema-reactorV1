import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstinComponent } from './astin.component';

describe('AstinComponent', () => {
  let component: AstinComponent;
  let fixture: ComponentFixture<AstinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

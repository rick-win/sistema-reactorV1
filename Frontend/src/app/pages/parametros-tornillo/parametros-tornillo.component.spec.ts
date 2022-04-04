import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosTornilloComponent } from './parametros-tornillo.component';

describe('ParametrosTornilloComponent', () => {
  let component: ParametrosTornilloComponent;
  let fixture: ComponentFixture<ParametrosTornilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosTornilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosTornilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniautonomaComponent } from './uniautonoma.component';

describe('UniautonomaComponent', () => {
  let component: UniautonomaComponent;
  let fixture: ComponentFixture<UniautonomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniautonomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniautonomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

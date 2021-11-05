import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveResumeComponent } from './directive-resume.component';

describe('DirectiveResumeComponent', () => {
  let component: DirectiveResumeComponent;
  let fixture: ComponentFixture<DirectiveResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmComponent } from './cdm.component';

describe('CdmComponent', () => {
  let component: CdmComponent;
  let fixture: ComponentFixture<CdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

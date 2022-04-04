import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdDirectivoComponent } from './cmd-directivo.component';

describe('CmdDirectivoComponent', () => {
  let component: CmdDirectivoComponent;
  let fixture: ComponentFixture<CmdDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdDirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

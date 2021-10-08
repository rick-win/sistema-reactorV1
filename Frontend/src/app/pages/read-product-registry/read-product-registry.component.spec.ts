import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProductRegistryComponent } from './read-product-registry.component';

describe('ReadProductRegistryComponent', () => {
  let component: ReadProductRegistryComponent;
  let fixture: ComponentFixture<ReadProductRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProductRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProductRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

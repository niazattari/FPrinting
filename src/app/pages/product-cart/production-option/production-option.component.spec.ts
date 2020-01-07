import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOptionComponent } from './production-option.component';

describe('ProductionOptionComponent', () => {
  let component: ProductionOptionComponent;
  let fixture: ComponentFixture<ProductionOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

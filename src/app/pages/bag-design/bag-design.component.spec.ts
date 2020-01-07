import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDesignComponent } from './bag-design.component';

describe('BagDesignComponent', () => {
  let component: BagDesignComponent;
  let fixture: ComponentFixture<BagDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

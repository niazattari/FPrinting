import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MugPrintingComponent } from './mug-printing.component';

describe('MugPrintingComponent', () => {
  let component: MugPrintingComponent;
  let fixture: ComponentFixture<MugPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MugPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MugPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

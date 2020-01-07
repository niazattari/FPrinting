import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopsComponent } from './envelops.component';

describe('EnvelopsComponent', () => {
  let component: EnvelopsComponent;
  let fixture: ComponentFixture<EnvelopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

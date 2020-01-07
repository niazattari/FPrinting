import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaflexComponent } from './panaflex.component';

describe('PanaflexComponent', () => {
  let component: PanaflexComponent;
  let fixture: ComponentFixture<PanaflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanaflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanaflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

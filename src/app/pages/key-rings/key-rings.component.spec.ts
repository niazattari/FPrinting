import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRingsComponent } from './key-rings.component';

describe('KeyRingsComponent', () => {
  let component: KeyRingsComponent;
  let fixture: ComponentFixture<KeyRingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyRingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCoversComponent } from './file-covers.component';

describe('FileCoversComponent', () => {
  let component: FileCoversComponent;
  let fixture: ComponentFixture<FileCoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileCoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

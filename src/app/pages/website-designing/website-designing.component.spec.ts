import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDesigningComponent } from './website-designing.component';

describe('WebsiteDesigningComponent', () => {
  let component: WebsiteDesigningComponent;
  let fixture: ComponentFixture<WebsiteDesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

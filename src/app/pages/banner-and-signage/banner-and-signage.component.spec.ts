import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAndSignageComponent } from './banner-and-signage.component';

describe('BannerAndSignageComponent', () => {
  let component: BannerAndSignageComponent;
  let fixture: ComponentFixture<BannerAndSignageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAndSignageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAndSignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

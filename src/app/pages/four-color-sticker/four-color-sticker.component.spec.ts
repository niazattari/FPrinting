import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColorStickerComponent } from './four-color-sticker.component';

describe('FourColorStickerComponent', () => {
  let component: FourColorStickerComponent;
  let fixture: ComponentFixture<FourColorStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColorStickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColorStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBuyPageComponent } from './buy-buy-page.component';

describe('BuyBuyPageComponent', () => {
  let component: BuyBuyPageComponent;
  let fixture: ComponentFixture<BuyBuyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBuyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBuyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBuyComponent } from './buy-buy.component';

describe('BuyBuyComponent', () => {
  let component: BuyBuyComponent;
  let fixture: ComponentFixture<BuyBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

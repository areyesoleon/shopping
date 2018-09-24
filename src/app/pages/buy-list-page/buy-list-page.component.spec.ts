import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListPageComponent } from './buy-list-page.component';

describe('BuyListPageComponent', () => {
  let component: BuyListPageComponent;
  let fixture: ComponentFixture<BuyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

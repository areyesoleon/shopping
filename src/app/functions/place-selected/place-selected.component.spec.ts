import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSelectedComponent } from './place-selected.component';

describe('PlaceSelectedComponent', () => {
  let component: PlaceSelectedComponent;
  let fixture: ComponentFixture<PlaceSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

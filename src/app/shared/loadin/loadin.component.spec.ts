import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinComponent } from './loadin.component';

describe('LoadinComponent', () => {
  let component: LoadinComponent;
  let fixture: ComponentFixture<LoadinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

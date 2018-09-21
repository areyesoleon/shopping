import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListListPageComponent } from './list-list-page.component';

describe('ListListPageComponent', () => {
  let component: ListListPageComponent;
  let fixture: ComponentFixture<ListListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

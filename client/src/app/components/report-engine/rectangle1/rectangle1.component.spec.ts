import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rectangle1Component } from './rectangle1.component';

describe('Rectangle1Component', () => {
  let component: Rectangle1Component;
  let fixture: ComponentFixture<Rectangle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rectangle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rectangle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

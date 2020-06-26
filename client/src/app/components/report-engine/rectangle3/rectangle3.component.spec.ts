import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rectangle3Component } from './rectangle3.component';

describe('Rectangle3Component', () => {
  let component: Rectangle3Component;
  let fixture: ComponentFixture<Rectangle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rectangle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rectangle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

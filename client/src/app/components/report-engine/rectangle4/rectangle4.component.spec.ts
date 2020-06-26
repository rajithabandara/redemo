import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rectangle4Component } from './rectangle4.component';

describe('Rectangle4Component', () => {
  let component: Rectangle4Component;
  let fixture: ComponentFixture<Rectangle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rectangle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rectangle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

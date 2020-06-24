import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRectangleComponent } from './static-rectangle.component';

describe('StaticRectangleComponent', () => {
  let component: StaticRectangleComponent;
  let fixture: ComponentFixture<StaticRectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticRectangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

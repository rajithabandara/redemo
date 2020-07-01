import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRectanglesComponent } from './dynamic-rectangles.component';

describe('DynamicRectanglesComponent', () => {
  let component: DynamicRectanglesComponent;
  let fixture: ComponentFixture<DynamicRectanglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRectanglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRectanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

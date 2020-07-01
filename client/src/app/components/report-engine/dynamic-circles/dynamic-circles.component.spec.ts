import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCirclesComponent } from './dynamic-circles.component';

describe('DynamicCirclesComponent', () => {
  let component: DynamicCirclesComponent;
  let fixture: ComponentFixture<DynamicCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

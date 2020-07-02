import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPolygonComponent } from './dynamic-polygon.component';

describe('DynamicPolygonComponent', () => {
  let component: DynamicPolygonComponent;
  let fixture: ComponentFixture<DynamicPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

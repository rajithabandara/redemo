import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEllipseComponent } from './dynamic-ellipse.component';

describe('DynamicEllipseComponent', () => {
  let component: DynamicEllipseComponent;
  let fixture: ComponentFixture<DynamicEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

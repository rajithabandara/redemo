import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticEllipseComponent } from './static-ellipse.component';

describe('StaticEllipseComponent', () => {
  let component: StaticEllipseComponent;
  let fixture: ComponentFixture<StaticEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

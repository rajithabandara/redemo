import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCircleComponent } from './static-circle.component';

describe('StaticCircleComponent', () => {
  let component: StaticCircleComponent;
  let fixture: ComponentFixture<StaticCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

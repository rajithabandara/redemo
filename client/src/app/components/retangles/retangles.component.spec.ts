import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetanglesComponent } from './retangles.component';

describe('RetanglesComponent', () => {
  let component: RetanglesComponent;
  let fixture: ComponentFixture<RetanglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetanglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

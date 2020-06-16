import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainSvgComponent } from './plain-svg.component';

describe('PlainSvgComponent', () => {
  let component: PlainSvgComponent;
  let fixture: ComponentFixture<PlainSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

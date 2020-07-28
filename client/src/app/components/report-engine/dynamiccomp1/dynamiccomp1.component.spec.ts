import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccomp1Component } from './dynamiccomp1.component';

describe('Dynamiccomp1Component', () => {
  let component: Dynamiccomp1Component;
  let fixture: ComponentFixture<Dynamiccomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamiccomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamiccomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

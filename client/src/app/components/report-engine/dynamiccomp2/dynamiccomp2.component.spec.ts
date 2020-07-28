import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccomp2Component } from './dynamiccomp2.component';

describe('Dynamiccomp2Component', () => {
  let component: Dynamiccomp2Component;
  let fixture: ComponentFixture<Dynamiccomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamiccomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamiccomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

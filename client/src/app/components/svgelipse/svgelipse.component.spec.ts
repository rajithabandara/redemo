import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgelipseComponent } from './svgelipse.component';

describe('SvgelipseComponent', () => {
  let component: SvgelipseComponent;
  let fixture: ComponentFixture<SvgelipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgelipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgelipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

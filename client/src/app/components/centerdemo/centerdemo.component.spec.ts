import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdemoComponent } from './centerdemo.component';

describe('CenterdemoComponent', () => {
  let component: CenterdemoComponent;
  let fixture: ComponentFixture<CenterdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgrectComponent } from './svgrect.component';

describe('SvgrectComponent', () => {
  let component: SvgrectComponent;
  let fixture: ComponentFixture<SvgrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

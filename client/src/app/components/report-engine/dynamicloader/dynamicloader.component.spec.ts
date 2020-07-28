import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicloaderComponent } from './dynamicloader.component';

describe('DynamicloaderComponent', () => {
  let component: DynamicloaderComponent;
  let fixture: ComponentFixture<DynamicloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

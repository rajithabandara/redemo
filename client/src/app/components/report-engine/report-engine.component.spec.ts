import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEngineComponent } from './report-engine.component';

describe('ReportEngineComponent', () => {
  let component: ReportEngineComponent;
  let fixture: ComponentFixture<ReportEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

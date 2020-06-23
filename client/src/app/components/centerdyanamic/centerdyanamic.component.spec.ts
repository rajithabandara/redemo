import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdynamicComponent } from './centerdyanamic.component';

describe('CenterdynamicComponent', () => {
  let component: CenterdynamicComponent;
  let fixture: ComponentFixture<CenterdynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterdynamicComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterdynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

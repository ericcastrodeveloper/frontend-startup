import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipNotifyComponent } from './tooltip-notify.component';

describe('TooltipNotifyComponent', () => {
  let component: TooltipNotifyComponent;
  let fixture: ComponentFixture<TooltipNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

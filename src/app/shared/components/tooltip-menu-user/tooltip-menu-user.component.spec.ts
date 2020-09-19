import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipMenuUserComponent } from './tooltip-menu-user.component';

describe('TooltipMenuUserComponent', () => {
  let component: TooltipMenuUserComponent;
  let fixture: ComponentFixture<TooltipMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

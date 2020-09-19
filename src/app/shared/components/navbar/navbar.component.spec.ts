import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TooltipNotifyComponent } from '../tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from '../tooltip-menu-user/tooltip-menu-user.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './signIn.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SignInComponent,
        NavbarComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

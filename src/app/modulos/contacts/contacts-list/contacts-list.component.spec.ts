import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponent } from './contacts-list.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContactsListComponent,
        NavbarComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

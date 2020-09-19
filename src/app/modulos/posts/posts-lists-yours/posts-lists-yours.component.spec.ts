import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListsYoursComponent } from './posts-lists-yours.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostsListsYoursComponent', () => {
  let component: PostsListsYoursComponent;
  let fixture: ComponentFixture<PostsListsYoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ 
        PostsListsYoursComponent,
        TooltipComponent,
        TooltipMenuUserComponent,
        TooltipNotifyComponent,
        LoaderComponent,
        NavbarComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListsYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

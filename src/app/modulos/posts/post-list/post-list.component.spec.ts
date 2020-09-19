import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './post-list.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PostsListComponent,
        NavbarComponent,
        LoaderComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        PostDetailsComponent,
        NavbarComponent,
        TooltipComponent,
        TooltipNotifyComponent,
        TooltipMenuUserComponent,
        LoaderComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (id: string) => { id: '1' } } } } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

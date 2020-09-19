import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditorComponent } from './post-editor.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { TooltipNotifyComponent } from 'src/app/shared/components/tooltip-notify/tooltip-notify.component';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { TooltipMenuUserComponent } from 'src/app/shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { HttpClientModule } from '@angular/common/http';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';
import { Router, ActivatedRoute } from '@angular/router';

describe('PostEditorComponent', () => {
  let component: PostEditorComponent;
  let fixture: ComponentFixture<PostEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule
      ({
        imports: [
          FormsModule,
          HttpClientModule
        ],
        declarations: [
          PostEditorComponent,
          NavbarComponent,
          TooltipNotifyComponent,
          TooltipMenuUserComponent,
          TooltipComponent,
          LoaderComponent,
          Base64Component,
          SnackbarComponent
        ],
        providers: [
          { provide: Router, useValue: { snapshot: { paramMap: { get: (id: string) => { id: '1' } } } } },
          { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (id: string) => { id: '1' } } } } },
          Base64Component
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

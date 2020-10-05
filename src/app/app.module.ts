import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostEditorComponent } from './modulos/posts/post-editor/post-editor.component';
import { PostsListComponent } from './modulos/posts/post-list/post-list.component';
import { PostDetailsComponent } from './modulos/posts/post-details/post-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { TooltipMenuUserComponent } from './shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { FormsModule } from '@angular/forms';
import { Base64Component } from './shared/components/base64/base64.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { PostsListsYoursComponent } from './modulos/posts/posts-lists-yours/posts-lists-yours.component';
import { MessagesListComponent } from './modulos/messages/messages-list/messages-list.component';
import { ContactsListComponent } from './modulos/contacts/contacts-list/contacts-list.component';
import { TooltipNotifyComponent } from './shared/components/tooltip-notify/tooltip-notify.component';
import { NgxMaskModule,  } from 'ngx-mask';
import { SignInComponent } from './modulos/login/signIn/signIn.component';
import { SignUpComponent } from './modulos/login/signUp/signUp.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostEditorComponent,
    PostDetailsComponent,
    TooltipComponent,
    TooltipMenuUserComponent,
    Base64Component,
    LoaderComponent,
    SnackbarComponent,
    PostsListsYoursComponent,
    MessagesListComponent,
    ContactsListComponent,
    TooltipNotifyComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [Base64Component],
  bootstrap: [AppComponent]
})
export class AppModule { }

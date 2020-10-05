import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './modulos/posts/post-list/post-list.component';
import { PostEditorComponent } from './modulos/posts/post-editor/post-editor.component';
import { PostDetailsComponent } from './modulos/posts/post-details/post-details.component';
import { PostsListsYoursComponent } from './modulos/posts/posts-lists-yours/posts-lists-yours.component';
import { MessagesListComponent } from './modulos/messages/messages-list/messages-list.component';
import { ContactsListComponent } from './modulos/contacts/contacts-list/contacts-list.component';
import { SignInComponent } from './modulos/login/signIn/signIn.component';
import { SignUpComponent } from './modulos/login/signUp/signUp.component';

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "login/signIn", component: SignInComponent },
  { path: "login/signUp", component: SignUpComponent },
  { path: "post/add", component: PostEditorComponent },
  { path: "post/edit/:id", component: PostEditorComponent },
  { path: "post/details/:id", component: PostDetailsComponent },
  { path: "post/list/yours", component: PostsListsYoursComponent },
  { path: "messages/list", component: MessagesListComponent },
  { path: "contacts/list", component: ContactsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

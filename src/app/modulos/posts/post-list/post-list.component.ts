import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { PostModel } from 'src/app/shared/model/post.model';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';
import { LikeSaveDTO } from 'src/app/shared/dto/like-save.dto';
import { UserModel } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts: PostModel[] = [];
  public loader: boolean = false;
  public isLogged: boolean = false;
  public user: UserModel = {
    firstName: ''
  };

  constructor(private apiPost: ApiService) {
  }

  ngOnInit() {

    const isLogado = localStorage.getItem('isLogado');
    this.isLogged = Boolean(isLogado);

    const usuarioExist = localStorage.getItem('user');

    if (usuarioExist) {
      this.user = JSON.parse(usuarioExist);
    }

    this.listPosts();
  }

  listPosts() {
    this.loader = true;
    this.apiPost.listPost().subscribe({
      next: result => {
        this.posts = result as PostModel[];
        this.loader = false;
      }
    })
  }

  likePost(post: PostModel) {

    const like: LikeSaveDTO = {
      idPost: post.id,
      idUser: this.user.id
    }

    this.apiPost.saveLike(like).subscribe({
      next: result => {
        let index = this.posts.indexOf(post);
        this.posts[index] = result;
      }
    });
  }

}

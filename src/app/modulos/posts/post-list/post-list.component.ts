import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { PostModel } from 'src/app/shared/model/post.model';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts: PostModel[] = [];
  public loader: boolean = false;

  constructor(private apiPost: ApiService) {
  }

  ngOnInit() {
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

}

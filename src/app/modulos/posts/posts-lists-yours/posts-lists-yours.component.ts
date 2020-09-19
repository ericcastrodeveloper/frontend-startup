import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/model/post.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { PostStatus } from 'src/app/shared/enums/posts-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-lists-yours',
  templateUrl: './posts-lists-yours.component.html',
  styleUrls: ['./posts-lists-yours.component.scss']
})
export class PostsListsYoursComponent implements OnInit {

  public posts: PostModel[] = [];
  public loader: boolean = false;

  constructor(private apiPost: ApiService, private router: Router) {
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
    });
  }

  disablePost(post: PostModel) {
    this.loader = true;
    this.apiPost.deletePost(post.id).subscribe({
      next: result => {
        this.router.navigate(['post/list/yours'])
          .then(() => {
            window.location.reload();
          });
      }
    });
  }

  verifyStatusPost(status: string) {
    return PostStatus[status];
  }

}

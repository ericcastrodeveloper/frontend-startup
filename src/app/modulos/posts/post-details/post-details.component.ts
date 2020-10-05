import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/shared/model/post.model';
import { LikeSaveDTO } from 'src/app/shared/dto/like-save.dto';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private apiPost: ApiService,
    private route: ActivatedRoute) { }

  public loader: boolean = false;
  public post: PostModel = this.postEmpty;

  get postEmpty(): PostModel {
    return {
      title: '',
      description: '',
      files: [{
        id: 0,
        data: '',
        name: '',
        position: 1,
        principal: true,
      }]
    };
  }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.findPost(id);

  }

  findPost(id: number) {
    this.loader = true;
    this.apiPost.getPost(id).subscribe({
      next: result => {
        this.post = result;
        this.loader = false;
      }
    })
  }

  likePost(post: PostModel) {

    const like: LikeSaveDTO = {
      idPost: post.id,
      idUser: 0
    }

    this.apiPost.saveLike(like).subscribe({
      next: result => {
        this.post = result;
      }
    });
  }

}

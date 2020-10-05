import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';
import { PostSaveDTO } from 'src/app/shared/dto/post-save.dto';
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  constructor(
    private apiPost: ApiService,
    private base64Service: Base64Component,
    private router: Router,
    private route: ActivatedRoute) { }

  get postEmpty(): PostSaveDTO {
    return {
      title: '',
      description: '',
      files: [{
        id: 0,
        data: '',
        name: '',
        position: 1,
        principal: true,
        file: null
      }],
      addressComplement: '',
      helpBudget: false,
      helpWork: false,
      cellphone: '',
      cep: '',
      responsible: ''
    };
  }

  public loader: boolean = false;
  public snackbar: boolean = false;
  public post: PostSaveDTO = this.postEmpty;
  public idPost: number = 0;

  ngOnInit() {
    this.idPost = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idPost != 0) {
      this.findPost(this.idPost);
    } else {
      this.apiPost.getEmptyDefaultImage().subscribe({
        next: emptyFile => {
          this.base64Service.getData(emptyFile).subscribe({
            next: file => {
              this.post.files[0] = {
                id: 0,
                data: file,
                name: this.base64Service.getName(emptyFile).toString(),
                position: 0,
                principal: true,
                file: emptyFile
              }
            }
          });
        }
      });
    }
  }

  openExplorer(img) {
    document.getElementById('image-'.concat(img.id.toString())).click();
  }

  changeFile($event, img) {
    const file = $event.target.files[0];
    this.base64Service.getData(file).subscribe({
      next: result => {
        this.post.files[img.position] = {
          id: img.id,
          data: result,
          name: this.base64Service.getName(file).toString(),
          position: 1,
          principal: true
        }
      }
    });
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

  changeCheckbocFinanceiro(value: boolean){
    if(value == false) {
      this.post.helpBudgetAmount = null;
    }
    this.post.helpBudget = value;
  }

  changeCheckbocMaoDeObra(value: boolean){
    if(value == false) {
      this.post.helpWorkCategory = null;
    }
    this.post.helpWork = value;
  }

  changeHowHelpWorkCategory(value: string) {
    this.post.helpWorkCategory = value;
  }

  changeCategory(value: string) {
    this.post.category = value;
  }

  savePost() {
    this.loader = true;
    if (this.idPost != 0) {
      this.apiPost.alterPost(this.idPost, this.post).subscribe({
        next: result => {
          this.snackbar = true;
        }
      });
    } else {
      this.apiPost.savePost(this.post).subscribe({
        next: result => {
          this.snackbar = true;
        }
      });
    }
  }

  confirmSnack() {
    this.router.navigate(['post/add/'])
      .then(() => {
        window.location.reload();
      });
  }

}

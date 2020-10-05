import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';
import { PostSaveDTO } from 'src/app/shared/dto/post-save.dto';
import { UserSaveDTO } from 'src/app/shared/dto/user-save.dto';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss']
})
export class SignInComponent {

  constructor(
    private apiUser: ApiService,
    private router: Router) { }

  get userEmpty(): UserSaveDTO {
    return {
      firstName: '',
      lastName: '',
      email: '',
      genre: '',
      dateBirth: null,
      password: '',
      phoneNumber: ''
    };
  }

  public loader: boolean = false;
  public snackbar: boolean = false;
  public user: UserSaveDTO = this.userEmpty;

  changeGenre(value: string){
    this.user.genre = value;
  }

  savePost() {
    this.loader = true;
    this.apiUser.saveUser(this.user).subscribe({
      next: result => {
        this.snackbar = true;
      }
    });
  }

  confirmSnack() {
    this.router.navigate(['login/signUp'])
      .then(() => {
        window.location.reload();
      });
  }

}

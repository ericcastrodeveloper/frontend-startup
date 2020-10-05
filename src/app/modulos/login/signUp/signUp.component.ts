import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/shared/dto/login.dto';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent {

  constructor(
    private apiUser: ApiService,
    private router: Router) { }

  get userEmpty(): LoginDTO {
    return {
      email: '',
      password: ''
    };
  }

  public loader: boolean = false;
  public snackbar: boolean = false;
  public user: LoginDTO = this.userEmpty;

  logar() {
    this.apiUser.logar(this.user).subscribe({
      next: result => {
        localStorage.setItem('user', JSON.stringify(result));
        localStorage.setItem('isLogado', 'true');
        this.router.navigate(['/'])
      }
    });
  }

}

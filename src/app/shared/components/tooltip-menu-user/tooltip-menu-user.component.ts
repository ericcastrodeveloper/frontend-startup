import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tooltip-menu-user',
  templateUrl: './tooltip-menu-user.component.html',
  styleUrls: ['./tooltip-menu-user.component.scss']
})
export class TooltipMenuUserComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    const isLogado = localStorage.getItem('isLogado');
    this.isLogged = Boolean(isLogado);

  }

  logout() {
    localStorage.removeItem('isLogado');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}

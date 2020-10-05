import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;

  constructor() { }

  ngOnInit() {

    const isLogado = localStorage.getItem('isLogado');
    this.isLogged = Boolean(isLogado);

  }

  showTooltipUser = false;
  showTooltipNotify = false;

  showTooltipMenuUser() {
    this.showTooltipUser = !this.showTooltipUser;
    this.showTooltipNotify = false;
  }

  showTooltipMenuNotify(){
    this.showTooltipNotify = !this.showTooltipNotify;
    this.showTooltipUser = false;
  }

}

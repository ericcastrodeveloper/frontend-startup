import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() callbackClick = new EventEmitter();

  click(){
    this.callbackClick.emit(true);
  }

}

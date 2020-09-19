import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contatos: Number[] = [1,2,3,4,2,12,21,,21,21,21,21,21,21,21,21,21,21,12];

  constructor() { }

  ngOnInit() {
  }

}

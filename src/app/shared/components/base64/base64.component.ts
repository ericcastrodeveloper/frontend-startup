import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getData(file: File): Observable<string> {
    var reader: FileReader = new FileReader();
    return new Observable<string>(observer => {
      reader.onloadend = e => {
        observer.next(reader.result.toString());
        observer.complete();
      };
      reader.readAsDataURL(file);
    })
  };

  getName(file: File) {
    return file.name;
  }

  convertImageToFile(dataURI, name) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return new File([blob], name, { type: 'image/png' });
  }

}

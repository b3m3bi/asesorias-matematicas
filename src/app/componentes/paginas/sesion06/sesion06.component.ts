import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { faPencilAlt, faBook, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sesion06',
  templateUrl: './sesion06.component.html',
  styleUrls: ['./sesion06.component.css']
})
export class Sesion06Component implements OnInit {

  faPencilAlt = faPencilAlt;
  faBook = faBook;
  faExclTri = faExclamationTriangle;
  faLightbulb = faLightbulb;

  url1;
  url2;
  url3;
  url4;
  url5;

  constructor( public _sanitizer: DomSanitizer) {
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/I1L8F3o93q0');
    this.url2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LWyZSXsMAr8'); 
    this.url3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tABhBMtBmSY');
    this.url4 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1dvGz8vQCeU');
    this.url5 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/TZcUxb1gnDk');
  }

  ngOnInit(): void {
  }

}

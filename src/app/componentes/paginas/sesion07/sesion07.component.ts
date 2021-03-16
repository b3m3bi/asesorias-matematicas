import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { faPencilAlt, faBook, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sesion07',
  templateUrl: './sesion07.component.html',
  styleUrls: ['./sesion07.component.css']
})
export class Sesion07Component implements OnInit {

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
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HfJU0z7Sb6A');
    this.url2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4h2-GpUcqwQ'); 
    this.url3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/v6iKv3QXqNs');
    this.url4 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3FHhPLVUt9o');
    this.url5 = this._sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit(): void {
  }

}

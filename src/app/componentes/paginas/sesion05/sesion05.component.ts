import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { faPencilAlt, faBook, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sesion05',
  templateUrl: './sesion05.component.html',
  styleUrls: ['./sesion05.component.css']
})
export class Sesion05Component implements OnInit {

  faPencilAlt = faPencilAlt;
  faBook = faBook;
  faExclTri = faExclamationTriangle;
  faLightbulb = faLightbulb;

  url1;
  url2;
  url3;

  constructor( public _sanitizer: DomSanitizer) {
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0fPKPiRcnqE');
    this.url2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/s4MZ2Y1Stpg'); 
    this.url3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xRC447bTueU');
  }

  ngOnInit(): void {
  }

}

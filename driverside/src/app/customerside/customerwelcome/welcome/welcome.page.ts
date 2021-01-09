import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
   imagen:string = '';
   titulo:string = 'Dobule';
  constructor() { }

  ngOnInit() {
    this.imagen = '../../../assets/img/imge.JPG';
  }

}

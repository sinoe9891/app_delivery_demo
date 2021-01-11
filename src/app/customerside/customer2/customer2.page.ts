import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.page.html',
  styleUrls: ['./customer2.page.scss'],
})
export class Customer2Page implements OnInit {
   imagen:string = '';
   
  constructor() { }

  ngOnInit() {
    this.imagen = '../../../assets/img/fondo.JPG';
  }

}

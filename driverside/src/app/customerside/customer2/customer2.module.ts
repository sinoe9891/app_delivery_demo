import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Customer2PageRoutingModule } from './customer2-routing.module';

import { Customer2Page } from './customer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Customer2PageRoutingModule
  ],
  declarations: [Customer2Page]
})
export class Customer2PageModule {}

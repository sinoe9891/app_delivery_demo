import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Customer2Page } from './customer2.page';

const routes: Routes = [
  {
    path: '',
    component: Customer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Customer2PageRoutingModule {}

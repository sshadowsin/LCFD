import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefrenceContentPage } from './refrence-content.page';

const routes: Routes = [
  {
    path: '',
    component: RefrenceContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefrenceContentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugsContentPage } from './drugs-content.page';

const routes: Routes = [
  {
    path: '',
    component: DrugsContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugsContentPageRoutingModule {}

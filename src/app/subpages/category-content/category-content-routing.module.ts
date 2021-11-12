import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryContentPage } from './category-content.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryContentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocolsContentPage } from './protocols-content.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocolsContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocolsContentPageRoutingModule {}

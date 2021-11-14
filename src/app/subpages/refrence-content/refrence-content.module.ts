import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefrenceContentPageRoutingModule } from './refrence-content-routing.module';

import { RefrenceContentPage } from './refrence-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefrenceContentPageRoutingModule
  ],
  declarations: [RefrenceContentPage]
})
export class RefrenceContentPageModule {}

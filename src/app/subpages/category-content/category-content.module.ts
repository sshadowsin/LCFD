import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryContentPageRoutingModule } from './category-content-routing.module';

import { CategoryContentPage } from './category-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryContentPageRoutingModule,
  ],
  declarations: [CategoryContentPage],
})
export class CategoryContentPageModule {}

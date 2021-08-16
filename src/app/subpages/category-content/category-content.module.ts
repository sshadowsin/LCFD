import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryContentPageRoutingModule } from './category-content-routing.module';

import { CategoryContentPage } from './category-content.page';
import { HighlightPipe } from 'src/app/models/text-highlight';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryContentPageRoutingModule,
  ],
  declarations: [CategoryContentPage, HighlightPipe],
  // providers: [HighlightPipe]
})
export class CategoryContentPageModule {}

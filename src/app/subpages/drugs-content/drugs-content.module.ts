import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugsContentPageRoutingModule } from './drugs-content-routing.module';

import { DrugsContentPage } from './drugs-content.page';

import { HighlightPipe } from 'src/app/models/text-highlight';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugsContentPageRoutingModule
  ],
  declarations: [DrugsContentPage, HighlightPipe]
})
export class DrugsContentPageModule {}

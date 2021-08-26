import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocolsContentPageRoutingModule } from './protocols-content-routing.module';

import { HighlightPipe } from 'src/app/models/text-highlight';

import { ProtocolsContentPage } from './protocols-content.page';
import { HighlightModule } from 'src/app/lib/highlight/highlight/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocolsContentPageRoutingModule,
    HighlightModule
  ],
  declarations: [ProtocolsContentPage, HighlightPipe]
})
export class ProtocolsContentPageModule {}

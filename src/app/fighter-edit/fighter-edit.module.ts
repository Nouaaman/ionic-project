import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FighterEditPageRoutingModule } from './fighter-edit-routing.module';

import { FighterEditPage } from './fighter-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FighterEditPageRoutingModule
  ],
  declarations: [FighterEditPage]
})
export class FighterEditPageModule {}

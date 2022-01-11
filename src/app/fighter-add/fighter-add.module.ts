import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FighterAddPage } from './fighter-add.page';


import { FighterAddPageRoutingModule } from './fighter-add-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FighterAddPageRoutingModule
  ],
  declarations: [FighterAddPage]
})
export class FighterAddPageModule {}

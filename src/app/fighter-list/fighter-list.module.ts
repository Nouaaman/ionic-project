import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FighterListPage } from './fighter-list.page';


import { FighterListPageRoutingModule } from './fighter-list-routing.module';
import { FighterComponent } from '../fighter/fighter.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FighterListPageRoutingModule
  ],
  declarations: [FighterListPage,FighterComponent],
  // schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FighterListPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FighterEditPage } from './fighter-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FighterEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FighterEditPageRoutingModule {}

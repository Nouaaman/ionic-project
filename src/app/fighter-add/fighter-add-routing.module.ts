import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterAddPage } from './fighter-add.page';

const routes: Routes = [
  {
    path: '',
    component: FighterAddPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FighterAddPageRoutingModule {}

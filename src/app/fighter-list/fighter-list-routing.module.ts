import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterListPage } from './fighter-list.page';

const routes: Routes = [
  {
    path: '',
    component: FighterListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FighterListPageRoutingModule {}

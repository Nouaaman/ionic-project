import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'fighters',
        loadChildren: () => import('../fighter-list/fighter-list.module').then(m => m.FighterListPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../fighter-add/fighter-add.module').then(m => m.FighterAddPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'native',
        loadChildren: () => import('../native/native.module').then(m => m.NativePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/fighters',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/fighters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

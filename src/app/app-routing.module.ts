import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fighter-edit',
    loadChildren: () => import('./fighter-edit/fighter-edit.module').then( m => m.FighterEditPageModule)
  },
  {
    path: 'native',
    loadChildren: () => import('./native/native.module').then( m => m.NativePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

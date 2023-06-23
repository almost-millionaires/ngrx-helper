import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'apple', loadChildren: () => import('./apple/apple.module').then(m => m.AppleModule) },
  {
    path: 'potato',
    loadChildren: () => import('./potato/potato.module').then(m => m.PotatoModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

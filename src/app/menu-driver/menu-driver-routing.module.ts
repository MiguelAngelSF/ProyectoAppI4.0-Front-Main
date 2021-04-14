import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDriverPage } from './menu-driver.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDriverPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPassengerPage } from './menu-passenger.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPassengerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPassengerPageRoutingModule {}

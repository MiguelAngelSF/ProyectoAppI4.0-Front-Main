import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPassengerPageRoutingModule } from './menu-passenger-routing.module';
import { MenuPassengerPage } from './menu-passenger.page';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    MenuPassengerPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MenuPassengerPage]
})
export class MenuPassengerPageModule {}

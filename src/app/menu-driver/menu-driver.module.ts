import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDriverPageRoutingModule } from './menu-driver-routing.module';

import { MenuDriverPage } from './menu-driver.page';
import { MenuPassengerPage } from '../menu-passenger/menu-passenger.page';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    MenuDriverPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MenuDriverPage]
})
export class MenuDriverPageModule {}

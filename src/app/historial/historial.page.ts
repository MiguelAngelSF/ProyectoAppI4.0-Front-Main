import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViajesService } from '../services/viajes.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  viajes: any;

  constructor(public modalCtrl: ModalController, public viajeService: ViajesService) { }

  ngOnInit() {
    this.getViajes();
  }

  async dismiss() { 
    return await this.modalCtrl.dismiss();
  }

  getViajes() {
    this.viajeService.obtenerViajes().then((data: any) =>{
      console.log(data.viajes);
      this.viajes=data.viajes;
    }).catch((err) =>{
      console.log(err);
    })
  }


}

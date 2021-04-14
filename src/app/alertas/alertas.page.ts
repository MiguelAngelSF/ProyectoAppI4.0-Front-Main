import { Component, OnInit } from '@angular/core';
import { AlertapModel } from '../models/alertap';
import { ModalController } from '@ionic/angular';
import { AlertapService } from '../services/alertap.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  alertas: any;

  constructor(public modalCtrl: ModalController, private _alertapService: AlertapService) { }
  alertap: AlertapModel = new AlertapModel();

  ngOnInit() {
  }

  async dismiss() { 
    return await this.modalCtrl.dismiss();
  }
  getAlerta() {
    this._alertapService.getAlerta().then((data: any) =>{
      console.log(data.alertas);
      this.alertas=data.alertas;
    }).catch((err) =>{
      console.log(err);
    })
  }

  postAlerta(){
    console.log(this.alertap); 
    this._alertapService.postAlerta(this.alertap).then((data: any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Alerta Enviada',
      })
      this.ngOnInit();
    }).catch((err) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' Ocurrio algo inesperado',
      })
    });
  }
}

import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RegistroAutoModel } from '../models/registro-auto';
import { RegistroAutoService } from '../services/registro-auto.service';
import { UsuarioModel } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-registro-auto',
  templateUrl: './registro-auto.page.html',
  styleUrls: ['./registro-auto.page.scss'],
})
export class RegistroAutoPage implements OnInit {
  id:any;
  autos: any;

  constructor(public usuariosService:UsuariosService, public alertcontroller:AlertController,public router: Router,private _registroauto:RegistroAutoService, public modalCtrl: ModalController) { }
  auto : RegistroAutoModel = new RegistroAutoModel();
  admin: UsuarioModel = new UsuarioModel();

  ngOnInit() {
    this.seleccionar();
  }

  seleccionar(){​​
    this.usuariosService.seleccionar(this.id).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
  }


  async registroAuto() {
   
    this.router.navigate(['/menu-driver'])
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Confirmación',
      message: 'Datos guardados',
      buttons: ['OK']
    });

    await alert.present();
  }

  async dismiss() { 
    return await this.modalCtrl.dismiss();
  }

getRegistro() {
  this._registroauto.registroAuto(this.autos).then((data: any) =>{
    console.log(data.autos);
    this.autos=data.autos;
  }).catch((err) =>{
    console.log(err);
  })
}
postRegistro(){
  console.log(this.auto); 
  this._registroauto.altaRegistro(this.auto).then((data: any) =>{

    this.ngOnInit();
  }).catch((err) =>{
   
  });
}
}

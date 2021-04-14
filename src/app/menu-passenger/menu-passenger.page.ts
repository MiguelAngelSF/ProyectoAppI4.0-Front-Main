import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AlertasPage } from '../alertas/alertas.page';
import { ViajeModel } from '../models/viajes';
import { ViajesService } from '../services/viajes.service';
import { CalificarPage } from '../calificar/calificar.page';
import { Plugins } from '@Capacitor/core';
import { SettingsPage } from '../settings/settings.page';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioModel } from '../models/usuarios';
import { CalificacionesPage } from '../calificaciones/calificaciones.page';

const {Geolocation} = Plugins;

@Component({
  selector: 'app-menu-passenger',
  templateUrl: './menu-passenger.page.html',
  styleUrls: ['./menu-passenger.page.scss'],
})
export class MenuPassengerPage {

  id:any;
  usuario:string;
  currentCenter: any;
  coordinates: any[] = [];
  defaultZoom = 14;

  constructor(public modalCtrl: ModalController ,public activeRoute:ActivatedRoute, public router:Router, public actionSheetController: ActionSheetController, public viajeService:ViajesService, public usuarioService:UsuariosService) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
      this.id=usuarioService.valor
      this.admin.nombre = ""
    })
  }
  viaje: ViajeModel = new ViajeModel(); 
  
  admin: UsuarioModel = new UsuarioModel();


  ngOnInit() {
    this.seleccionar();
  }

  ionViewDidEnter() {
    this.getCurrentPosition();
  }

  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }

  watchPOsition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    })
  }
  

  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

  postViajes(){
    this.viaje.email=this.admin.email
    console.log(this.viaje); 
    this.usuarioService.altaViaje(this.viaje).then((data: any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Viaje Solicitado',
        text: 'Peticion Enviada',
      })
    }).catch((err) =>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' Ocurrio algo inesperado',
      })
    })
  }

  seleccionar(){​​
    this.usuarioService.seleccionar(this.id).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
  }

  // postViajes(){
  //   console.log(this.viaje); 
  //   this.viajeService.altaViaje(this.viaje).then((data: any) =>{
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Exito',
  //       text: 'Viaje Solicitado',
  //     })
      
  //   }).catch((err) =>{
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: ' Ocurrio algo inesperado',
  //     })
  //   });
  // }
  async settings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage ,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Datos-modal',
    })

    return await modal.present();
  }

  async calificaciones() {
    const modal = await this.modalCtrl.create({
      component: CalificacionesPage ,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Datos-modal',
    })

    return await modal.present();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Debito/Credito',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Registro de Datos',
        role: 'destructive',
        icon: 'cash-outline',
        handler: () => {
          console.log('Pago en Efectivo');
        }
      }, {
        text: 'Cancelar',
        icon: 'close-circle-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async Alertas() {
    const modal = await this.modalCtrl.create({
      component: AlertasPage ,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Alertas-modal',
    })

    return await modal.present();
  }
  async CalificarConductor() {
    const modal = await this.modalCtrl.create({
      component: CalificarPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Calificar-modal',
    })
  
    return await modal.present();
  }
 



}

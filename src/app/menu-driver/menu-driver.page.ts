import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ViajeModel } from '../models/viajes';
import { ViajesService } from '../services/viajes.service';
import { Plugins } from '@Capacitor/core';
import {SettingsPage } from '../settings/settings.page';
import { ModalController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { RegistroAutoPage } from '../registro-auto/registro-auto.page';
import { AutosPage } from '../autos/autos.page';
import { HistorialPage } from '../historial/historial.page';
const {Geolocation} = Plugins;


@Component({
  selector: 'app-menu-driver',
  templateUrl: './menu-driver.page.html',
  styleUrls: ['./menu-driver.page.scss'],
})
export class MenuDriverPage {
  id:any;
  usuario:string;
  viajes: any;
  currentCenter: any;
  coordinates: any[] = [];
  defaultZoom = 14;
  
  constructor(public modalCtrl: ModalController, public activeRoute:ActivatedRoute, public router:Router, private viajeService:ViajesService, public usuarioService: UsuariosService) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
   }

   admin: UsuarioModel = new UsuarioModel();
   id2: ViajeModel = new ViajeModel();
   id3: ViajeModel = new ViajeModel();

  ngOnInit() {
    this.seleccionar();
    this.getViajes();
  }

  seleccionar(){​​
    this.usuarioService.seleccionar(this.id).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
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
  async registroAuto() {
    const modal = await this.modalCtrl.create({
      component:  RegistroAutoPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Datos-modal',
    })

    return await modal.present();
  }

  async tuAuto() {
    const modal = await this.modalCtrl.create({
      component: AutosPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Alertas-modal',
    })

    return await modal.present();
  }

  async historial() {
    const modal = await this.modalCtrl.create({
      component: HistorialPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Alertas-modal',
    })

    return await modal.present();
  }


  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }


  getViajes() {
    this.viajeService.obtenerViajes().then((data: any) =>{
      console.log(data.viajes);
      this.viajes=data.viajes;
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteViajes(id2: string){
    this.viajeService.bajaViaje(id2).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Viaje Denegado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

  confirmarViajes(){
    this.viajeService.obtenerViajes().then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Viaje Confirmado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}

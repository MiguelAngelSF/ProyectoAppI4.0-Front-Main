import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { RegistroAutoModel } from '../models/registro-auto';
import { UsuarioModel } from '../models/usuarios';
import { RegistroAutoService } from '../services/registro-auto.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {


  registros: any;

  constructor(private autoService: RegistroAutoService, public modalCtrl: ModalController, public usuariosService: UsuariosService) { }

  id: RegistroAutoModel = new RegistroAutoModel();
  admin: UsuarioModel = new UsuarioModel();

  ngOnInit() {
    this.getAuto();
   
  }

  async dismiss() { 
    return await this.modalCtrl.dismiss();
  }

  // seleccionar(){​​
  //   this.usuariosService.seleccionar(this.id).then((data: any) => {​​
  //   this.admin = data.usuarios;
  //   console.log("Seleccion",this.admin);
  //   }​​).catch((err) => {​​
  //   console.log(err);
  //   }​​);
  // }

 
  getAuto() {
    this.autoService.obtenerRegistro().then((data: any) =>{
      console.log(data.registros);
      this.registros=data.registros;
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteAutos(id: string){
    this.autoService.bajaRegistro(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Auto Eliminado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}

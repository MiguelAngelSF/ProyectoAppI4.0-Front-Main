import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { UsuariosService } from '../services/usuarios.service';
import { CalificacionModel } from '../models/calif';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

  usuarios: any;

  constructor(public modalCtrl: ModalController, public usuarioService:UsuariosService) { }

  cal: CalificacionModel = new CalificacionModel();
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
     
      this.usuarios=data.usuarios;
      
    }).catch((err) =>{
      console.log(err);
    })
  }

  postCal(){
    console.log(this.cal); 
    this.usuarioService.altaCal(this.cal).then((data: any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Conductor',
        text: 'Calificado',
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

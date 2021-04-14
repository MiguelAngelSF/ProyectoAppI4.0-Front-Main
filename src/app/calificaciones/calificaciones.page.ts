import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  cali:any;
  id:any;

  constructor(public modalCtrl: ModalController, public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getCal();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  getCal() {
    this.usuariosService.obtenerCal().then((data: any) =>{
      console.log(data.cali);
     
      this.cali=data.cali;
      
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteCal(id: string){
    this.usuariosService.bajaCal(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Registro',
        text: 'Eliminado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}

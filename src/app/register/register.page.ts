import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuarios: any;

  constructor(public modalCtrl: ModalController, private _usuariosService: UsuariosService) { }
  usuario: UsuarioModel = new UsuarioModel(); 

  ngOnInit() {
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

  getUsuarios() {
    this._usuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
  }

  postUsuario(){
    console.log(this.usuario); 
    this._usuariosService.altaUsuario(this.usuario).then((data: any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Usuario Insertado',
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

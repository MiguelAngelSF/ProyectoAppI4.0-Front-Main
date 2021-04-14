import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuarios';
import { LoginService } from '../services/login.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios: any;
  password: string;
  usuario: string;
  tipo: string;
  log:boolean;

  constructor(public alertController: AlertController, public router: Router, public modalCtrl: ModalController, private loginService: LoginService, private _usuariosService: UsuariosService ) { 
    this.usuarios = this.password = this.tipo = "";
  }
  usuario1: UsuarioModel = new UsuarioModel();

  // async logIn(){
  //   if(this.usuarios == 'pasajero' && this.password == 'pass123' ){
  //     //Las credenciales son correctas
  //    let navExtras:NavigationExtras = {
  //      queryParams:{
  //        userName:this.usuario
  //      }
  //    }
  //    let infoUser = {
  //      userName: this.usuario,
  //      correo: 'user@gamil.com',
  //      tipoUser: 'admin'
  //    }
  //    localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
  //    this.router.navigate(['/menu-passenger'], navExtras)

  //   } 
  //   if(this.usuarios == 'conductor' && this.password == 'pass123' ){
  //     //Las credenciales son correctas
  //    let navExtras:NavigationExtras = {
  //      queryParams:{
  //        userName:this.usuario
  //      }
  //    }
  //    let infoUser = {
  //      userName: this.usuario,
  //      correo: 'user@gamil.com',
  //      tipoUser: 'admin'
  //    }
  //    localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
  //    this.router.navigate(['/menu-driver'], navExtras)

  //   }
  //   if(this.usuarios == 'admin' && this.password == 'pass123' ){
  //     //Las credenciales son correctas
  //    let navExtras:NavigationExtras = {
  //      queryParams:{
  //        userName:this.usuario
  //      }
  //    }
  //    let infoUser = {
  //      userName: this.usuario,
  //      correo: 'user@gamil.com',
  //      tipoUser: 'admin'
  //    }
  //    localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
  //    this.router.navigate(['/menu-passenger'], navExtras)

  //   } else {
  //     const alert = await this.alertController.create({
  //       cssClass: 'my-custom-class',
  //       header: 'SESIÓN INICIADA',
  //       message: 'LAS CREDENCIALES SON CORRECTAS',
  //       buttons: ['OK']
  //     });
  
  //     await alert.present();
  //   }
    
  // }

  ngOnInit() {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this._usuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
      console.log("Codigo",this.usuarios);
      console.log();
    }).catch((err) =>{
      console.log(err);
    })
  }

  loginUsuarios(){
    console.log(this.usuarios); 
    this.loginService.loginUsuario(this.usuarios).then((data: any) =>{
      if (this.usuarios.tipoUsuario=='Pasajero') {
        this.router.navigate(['/menu-passenger'])
      } else {
        this.router.navigate(['/menu-driver'])
      }
    }).catch((err) =>{
    console.log(err)
    });
  }
 

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async login(){
    for(let x = 0; x < this.usuarios.length; x++){
      if(this.usuario == this.usuarios[x].email && this.password == this.usuarios[x].password){
        console.log(this.usuarios.email);
        console.log(this.usuario);
        //Las credenciales son correctas
      this.log=true
      this._usuariosService.value(this.usuarios[x]._id),((data: any) =>{
      })
      
      }
    }
  

    if(this.log == true && this.usuario1.tipoUsuario=='Pasajero'){
       this.router.navigate(['/menu-passenger'])

    }if(this.log == true && this.usuario1.tipoUsuario=='Conductor'){
      this.router.navigate(['/menu-driver'])
      
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'CORRECTO',
        message: 'LAS CREDENCIALES SON CORRECTAS',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.log=false;
  }
}

 
 



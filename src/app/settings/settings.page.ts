import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@Capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioModel } from '../models/usuarios';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  id: any;
  

  userImage ="assets/img/avatar.png";
  photo: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer, public usuariosService: UsuariosService,  public router: Router, public modalCtrl: ModalController) {
    this.id=usuariosService.valor;
   }
  
  admin: UsuarioModel = new UsuarioModel();
  
  ngOnInit() {
    this.seleccionar();
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  seleccionar(){​​
    this.usuariosService.seleccionar(this.id).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
  }

  retroceder(){
   this.router.navigate(['/menu-passenger'])
  }

}

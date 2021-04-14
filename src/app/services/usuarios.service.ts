import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarios';
import { CalificacionModel } from '../models/calif';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  valor:number

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}/usuario`).toPromise();
    }

  altaUsuario(usuario: UsuarioModel) {
    console.log(usuario);
    return this.http.post(`${this.url}/usuario`, usuario).toPromise() ; 
  }
  altaViaje(usuario: any) {
    console.log(usuario);
    return this.http.post(`${this.url}/viaje`, usuario).toPromise();
  }

  value(val:any){
    console.log("servicio",val)
    this.valor=val
  }
  seleccionar(id: string){
    console.log(id);​​
    return this.http.get(`${this.url}/usuario/${id}`).toPromise();
  }

  obtenerCal() {
    return this.http.get(`${this.url}/calif`).toPromise();
    }
  
  altaCal(cali: CalificacionModel) {
    console.log(cali);
    return this.http.post(`${this.url}/calif`, cali).toPromise() ; 
  }

  bajaCal(_id: string){
    return this.http.delete(`${this.url}/calif/${_id}`).toPromise();
  }
  
}

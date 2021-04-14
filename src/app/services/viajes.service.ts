import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajeModel } from '../models/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  valor:number

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerViajes() {
    return this.http.get(`${this.url}/viaje`).toPromise();
   }

  altaViaje(viaje: ViajeModel) {
    console.log(viaje);
    return this.http.post(`${this.url}/viaje`, viaje).toPromise() ;
  }

  bajaViaje(_id: string){
    return this.http.delete(`${this.url}/viaje/${_id}`).toPromise();
  }


  
  
}
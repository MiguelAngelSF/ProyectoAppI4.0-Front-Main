import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroAutoModel } from '../models/registro-auto';
@Injectable({
  providedIn: 'root'
})
export class RegistroAutoService {
   url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  registroAuto(registro: RegistroAutoModel) {
    console.log(registro);
    return this.http.post(`${this.url}/registro-auto`, registro).toPromise() ;
    
  }

  obtenerRegistro() {
    return this.http.get(`${this.url}/registro-auto`).toPromise();
  }

  altaRegistro(registro: RegistroAutoModel) {
    console.log(registro);
    return this.http.post(`${this.url}/registro-auto`, registro).toPromise() ;
  }

  bajaRegistro(_id: string){
    return this.http.delete(`${this.url}/registro-auto/${_id}`).toPromise();
  }


  
}

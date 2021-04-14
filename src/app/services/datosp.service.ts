import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatospModel } from '../models/datosp';


@Injectable({
  providedIn: 'root'
})
export class DatospService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${this.url}/usuario`).toPromise();
    }

  postDatos(datosp: DatospModel) {
    console.log(datosp);
    return this.http.post(`${this.url}/usuario`, datosp).toPromise() ;
    
  }
  
}
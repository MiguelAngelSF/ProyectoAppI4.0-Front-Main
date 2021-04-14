import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertapModel } from '../models/alertap';


@Injectable({
  providedIn: 'root'
})
export class AlertapService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAlerta() {
    return this.http.get(`${this.url}/alerta`).toPromise();
    }

  postAlerta(alertap: AlertapModel) {
    console.log(alertap);
    return this.http.post(`${this.url}/alerta`, alertap).toPromise();
  }
}
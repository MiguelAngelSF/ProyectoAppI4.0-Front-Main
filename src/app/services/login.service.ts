import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  loginUsuario(usuario: UsuarioModel) {
    console.log(usuario);
    return this.http.post(`${this.url}/login`, usuario).toPromise() ;
  }
}

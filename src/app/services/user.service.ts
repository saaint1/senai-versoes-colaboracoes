import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '..src/app/model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

urlLogin = "http://localhost:3000/login";

  logarUsuario(usuario: UserService): Observable <any> {
     return this.httpClient.post(this.urlLogin, JSON.stringify(usuario), {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      observe: "response"
     } )
  }
}

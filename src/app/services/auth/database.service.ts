import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  autorizado(){
    return sessionStorage.getItem("User") != null;
  }

  crearToken(){
    sessionStorage.setItem("User","josue@test.com")
  }

  eliminarToken(){
    sessionStorage.removeItem("User")
  }
}

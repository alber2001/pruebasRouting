import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComisionTecnicaInvalidezService {

  creacion_perfil: boolean = true
  datos_generales: boolean = false



  constructor() { }

  creacionPerfil(){
    this.creacion_perfil=true
    this.datos_generales=false
  }

  datosGenerales(){

    this.creacion_perfil=false
    this.datos_generales=true

  }










}

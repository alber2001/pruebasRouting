import { Component } from '@angular/core';
import { ComisionTecnicaInvalidezService } from '../comision-tecnica-invalidez.service';

@Component({
  selector: 'app-creacion-perfil',
  templateUrl: './creacion-perfil.component.html',
  styleUrls: ['./creacion-perfil.component.css']
})
export class CreacionPerfilComponent {

  constructor(public _ctis: ComisionTecnicaInvalidezService) {

  }


  tipo_busqueda: boolean = true

  texto_busqueda: string = 'Consultar Por Identidad'

  identidad: string = ''

  rivm: string = ''

  default_check: boolean = true


  seleccionarBusqueda(tipo: number) {
    if (tipo === 1) {
      this.tipo_busqueda = true
      this.texto_busqueda = 'Consultar Por Identidad'
    } else {
      this.tipo_busqueda = false
      this.texto_busqueda = 'Verificar RIVM'
    }
  }

  buscar() {

    this._ctis.datosGenerales()

  }

  limpiar() { }
}

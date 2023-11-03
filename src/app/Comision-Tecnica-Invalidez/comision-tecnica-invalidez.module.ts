import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictamenComponent } from './dictamen/dictamen.component';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { RouterModule } from '@angular/router';
import { ComisionTecnicaRoutes } from './comision-tecnica-invalidez.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreacionPerfilComponent } from './creacion-perfil/creacion-perfil.component';


@NgModule({
  declarations: [DatosGeneralesComponent, DictamenComponent, CreacionPerfilComponent],
  imports: [
    CommonModule, FormsModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(ComisionTecnicaRoutes)
  ]
})
export class ComisionTecnicaInvalidezModule { }

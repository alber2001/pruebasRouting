import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const Approutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comision-tecnica-invalidez',
        loadChildren: () =>
          import('./Comision-Tecnica-Invalidez/comision-tecnica-invalidez.module').then(
            (m) => m.ComisionTecnicaInvalidezModule,
          ),
      },

    ],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

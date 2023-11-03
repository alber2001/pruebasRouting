import { Routes } from "@angular/router";
import { DictamenComponent } from "./dictamen/dictamen.component";

export const ComisionTecnicaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dictamen',
        component: DictamenComponent,
        data: {
          title: 'Dictamen',
          urls: [
            { title: 'Dictamen', url: '/dictamen' },
            { title: 'Dictamen' },
          ],
        },
      },
    ],
  },
]

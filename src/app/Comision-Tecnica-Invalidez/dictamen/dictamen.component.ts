import { Component } from '@angular/core';
import { ComisionTecnicaInvalidezService } from '../comision-tecnica-invalidez.service';

@Component({
  selector: 'app-dictamen',
  templateUrl: './dictamen.component.html',
  styleUrls: ['./dictamen.component.css']
})
export class DictamenComponent {

  constructor(public _ctis: ComisionTecnicaInvalidezService) {

  }

}


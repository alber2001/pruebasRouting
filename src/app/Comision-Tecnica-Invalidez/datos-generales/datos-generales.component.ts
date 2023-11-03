import { Component } from '@angular/core';
import { ComisionTecnicaInvalidezService } from '../comision-tecnica-invalidez.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent {
    
  formulario!: FormGroup;

  constructor(public _ctis: ComisionTecnicaInvalidezService, private formBuilder: FormBuilder) {
    
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: [null, Validators.required],
      genero: ['', Validators.required],
    });
  }

  // Formulario: FormGroup;

  // this.Formulario = this.FormBuilder.group({

  // });
  
  
  
}






  // import { Component } from '@angular/core';
  // import { FormGroup, FormBuilder } from '@angular/forms';

  // @Component({
  //   selector: 'app-form',                                                app-form = app-datos-generales
  //   templateUrl: './form.component.html',                                 form.component.html=   datos-generales.component.html
  //   styleUrls: ['./form.component.css']                                   form.component.css = datos-generales.component.css
  // })


  // export class FormComponent {                                               FormComponent =DatosGeneralesComponent 
  //   formGroup: FormGroup;
                                                          
  //   constructor(private formBuilder: FormBuilder) {                                formBuilder=ctis
  //     this.formGroup = this.formBuilder.group({
  //       field1: [''], // Puedes establecer valores iniciales y validaciones aquí
  //       field2: ['']
  //       // Agrega más campos aquí con valores iniciales y validaciones
  //     });
  //   }
  // }
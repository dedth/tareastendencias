import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.css']
})
export class AutomovilComponent {
  modelo: string = '';
  placa: string = '';
  year: Date = new Date();
  kilometraje: number = 0;
  estado: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      modelo: ['', [Validators.required]],
      placa: ['', [Validators.minLength(6)]],
      year: ['', [Validators.required]],
      kilometraje: [0, [Validators.required, Validators.minLength(3000)]],
      rin: ['', [Validators.required]],
      modo: ['', [Validators.required]],
      opcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      fechaCompra: ['', [Validators.required]],
      state: [false,[]],
    })
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }

  validateForm() {
    if (this.modelo === '' && this.modelo.length <= 3) {

    }
  }
}

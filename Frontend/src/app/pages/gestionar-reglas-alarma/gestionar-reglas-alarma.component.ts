import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-gestionar-reglas-alarma',
  templateUrl: './gestionar-reglas-alarma.component.html',
  styleUrls: ['./gestionar-reglas-alarma.component.scss']
})
export class GestionarReglasAlarmaComponent implements OnInit {

  formReglaAlarma: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.formReglaAlarma = new FormGroup({});
  }

  ngOnInit(): void
  {
    this.formReglaAlarma = this.fb.group
    ({
      cod_fuente: this.fb.array([this.fb.group({codFuente:['']})]),
      criterio: this.fb.array([this.fb.group({criterios:['']})])
    });
  }

  get getCodfuente()
  {
    return this.formReglaAlarma.get('cod_fuente') as FormArray;
  }

  get getCriterio()
  {
    return this.formReglaAlarma.get('criterio') as FormArray;
  }

  addCodFuente()
  {
    const control = <FormArray>this.formReglaAlarma.controls['cod_fuente'];
    control.push(this.fb.group({codFuente:[]}));
  }

  addCriterio()
  {
    const control = <FormArray>this.formReglaAlarma.controls['criterio'];
    control.push(this.fb.group({criterios:[]}));
  }

  eliminarCodFuente(index: number)
  {
    const control = <FormArray>this.formReglaAlarma.controls['cod_fuente'];
    control.removeAt(index);
  }

  eliminarCriterio(index: number)
  {
    const control = <FormArray>this.formReglaAlarma.controls['criterio'];
    control.removeAt(index);
  }

  registrarProducto(){}

}

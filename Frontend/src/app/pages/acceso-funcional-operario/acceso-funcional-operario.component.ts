import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acceso-funcional-operario',
  templateUrl: './acceso-funcional-operario.component.html',
  styleUrls: ['./acceso-funcional-operario.component.scss']
})
export class AccesoFuncionalOperarioComponent implements OnInit {

  hopperState: boolean = false;
  hopperOpen: string = 'a';
  powerState: boolean = false;
  powerOn:string = 'a';
  hopperCharge: boolean = false;
  charged: string = 'a';
  chillerPower: boolean = false;
  chillerStatus: string = 'a';
  voidPumpPower: boolean = false;
  voidStatus: string = 'a';
  compresorPower: boolean = false;
  compresorStatus: string = 'a';
  constructor(
    private http : HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  check(){
    console.log('Checking')
    if (this.hopperState == true){
      this.hopperOpen = 'Closed';
    }else{
      this.hopperOpen = 'Open'
    }
    if (this.powerState == true){
      this.powerOn = 'Encendido';
    }else{
      this.powerOn = 'Apagado'
    }
    if (this.hopperCharge == true){
      this.charged = 'Cargado';
    }else{
      this.charged = 'Vacio'
    }
    if (this.chillerPower == true){
      this.chillerStatus = 'Operando';
    }else{
      this.chillerStatus = 'apagado'
    }
    if (this.voidPumpPower == true){
      this.voidStatus = 'Operando';
    }else{
      this.voidStatus = 'apagado'
    }
    if (this.compresorPower == true){
      this.compresorStatus = 'Operando';
    }else{
      this.compresorStatus = 'apagado'
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.scss']
})
export class TemperaturasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   guardar(formPerfilTemp:NgForm){
    console.log(formPerfilTemp.value)
   }
}

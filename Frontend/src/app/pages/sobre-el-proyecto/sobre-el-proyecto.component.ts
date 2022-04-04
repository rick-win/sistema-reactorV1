import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-el-proyecto',
  templateUrl: './sobre-el-proyecto.component.html',
  styleUrls: ['./sobre-el-proyecto.component.scss']
})
export class SobreElProyectoComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}

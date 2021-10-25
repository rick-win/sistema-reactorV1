import { Component, OnInit } from '@angular/core';
import { ReportsManagerService } from "../../services/reports-manager.service";
import { Product } from "../../models/product";

@Component({
  selector: 'app-read-product-registry',
  templateUrl: './read-product-registry.component.html',
  styleUrls: ['./read-product-registry.component.scss']
})
export class ReadProductRegistryComponent implements OnInit {

  constructor(private reportsService: ReportsManagerService) { }

  reports: any = []

  ngOnInit(): void {
    this.reportsService.getProduct().subscribe(
      res => {
        this.reports = res;
      },
      err => console.log(err)
    )
  }
}



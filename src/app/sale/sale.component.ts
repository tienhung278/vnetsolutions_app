import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from '../shared/services/sale.service';
import { SaleProduct } from '../shared/types/saleproduct.type';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit, OnDestroy {

  saleProducts$: Observable<SaleProduct[]> = new Observable<SaleProduct[]>();
  interval: any;

  constructor(private saleServices: SaleService) { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => this.getUnitsRevenueProduct(), 60000);
  }

  getUnitsRevenueProduct() {
    this.saleProducts$ = this.saleServices.getUntisRevenueProduct();
  }
}

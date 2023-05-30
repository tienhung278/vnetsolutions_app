import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleProduct } from '../types/saleproduct.type';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  baseUrl: String = "http://localhost:8080/api/sale";

  constructor(private httpClient: HttpClient) { }

  getUntisRevenueProduct() : Observable<SaleProduct[]> {
    return this.httpClient.get<SaleProduct[]>(`${this.baseUrl}/unitsrevenuebyproduct`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

class Product {
  name!: string;
  color!: string;
  price!: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint = "http://localhost:3000/product/";

  constructor(public hc: HttpClient) { }

  addProduct(data: any): Observable<Product> {
    return this.hc.post<Product>(this.endpoint, data);
  }
  getAllProduct(): Observable<Product> {
    return this.hc.get<Product>(this.endpoint);
  }
  getSingleProduct(id: number): Observable<Product> {
    return this.hc.get<Product>(this.endpoint + id);
  }
  updateProduct(id: number, data: any): Observable<Product> {
    return this.hc.put<Product>(this.endpoint + id, data);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.hc.delete<Product>(this.endpoint + id);
  }
}

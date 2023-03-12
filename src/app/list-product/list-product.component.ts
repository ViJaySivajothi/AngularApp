import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  plist: any = [];

  constructor(public cs: CrudService) { }

  ngOnInit(): void {
    this.fetchAllProduct();
  }

  fetchAllProduct() {
    this.cs.getAllProduct().subscribe(res => {
      this.plist = res;
    });
  }

  removeProduct(uid: number) {
    window.confirm("Are you delete this product?")
    {
      this.cs.deleteProduct(uid).subscribe(res => {
        this.fetchAllProduct();
      });
    }
  }

}

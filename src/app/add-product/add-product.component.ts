import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(public cs: CrudService,
    public rt: Router) { }

  @Input() productObj = { name: '', color: '', price: '' };

  addProduct(info: any) {
    this.cs.addProduct(info).subscribe(res => {
      this.rt.navigate(['/list']);
    });
  }

}

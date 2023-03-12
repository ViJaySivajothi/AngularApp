import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  eid: number = this.act.snapshot.params['id'];

  prolist: any = [];

  constructor(public cs: CrudService,
    public act: ActivatedRoute,
    public rt: Router) { }

  ngOnInit(): void {
    this.fetchSingleProduct(this.eid);
  }

  fetchSingleProduct(uid: number) {
    this.cs.getSingleProduct(uid).subscribe(res => {
      this.prolist = res;
    });
  }

  updateInfo(uid: number, info: any) {
    this.cs.updateProduct(uid, info).subscribe(res => {
      this.rt.navigate(["/list"]);
    });
  }
}

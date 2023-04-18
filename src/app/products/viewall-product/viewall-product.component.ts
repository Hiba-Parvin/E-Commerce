import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {
  productData: any
  filterCategory: any
  constructor(private ps: ProductService) {

  }
  ngOnInit(): void {
    this.ps.viewAllProduct().subscribe((data: any) => {
      console.log(data);
      this.productData = data

    })
  }

  filter(category: any) {
    this.filterCategory = this.productData.filter((i: any) => {
      if (i.categoryName == category || category == "") {
        return i
      }
    })
  }

}

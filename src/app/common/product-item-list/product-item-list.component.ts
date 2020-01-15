import { Component, OnInit } from '@angular/core';
import { Product} from '../../shared/product';
import { ActivatedRoute} from '@angular/router';
import { PRODUCTS} from 'src/app/shared/products';
@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent implements OnInit {
  products = PRODUCTS;
  
  selectedProduct:Product;
  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  
  }
  onSelect(product:Product) {
    this.selectedProduct = product;
  }
}
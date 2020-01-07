import { Component, OnInit } from '@angular/core';
import { product} from '../../products';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.css']
})
export class ProductItemListComponent implements OnInit {
  products = product;
  product;
  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = product[+params.get('productId')];
    });
  }
}
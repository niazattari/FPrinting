import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {product} from '..//..//products';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 products = product;
  constructor() { }

  ngOnInit() {
  }

}

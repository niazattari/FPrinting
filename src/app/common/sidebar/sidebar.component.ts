import { Component, OnInit } from '@angular/core';
import {product} from '../../products';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products = product;
  
  constructor() { }

  ngOnInit() {
  }

}

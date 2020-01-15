import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-bussiness-card',
  templateUrl: './bussiness-card.component.html',
  styleUrls: ['./bussiness-card.component.css']
})
export class BussinessCardComponent implements OnInit {
  @Input() product:Product;
  constructor() { }

  ngOnInit() {
  }

}

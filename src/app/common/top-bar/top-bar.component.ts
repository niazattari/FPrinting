import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../shared/product';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

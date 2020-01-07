import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';
import { ProductionOptionComponent } from './production-option/production-option.component';
import { UploadDesignComponent } from './upload-design/upload-design.component';
import { DeliveryOptionComponent } from './delivery-option/delivery-option.component';



@NgModule({
  declarations: [
    ProductionOptionComponent,
     UploadDesignComponent,
      DeliveryOptionComponent],
  imports: [
    CommonModule
  ]
})
export class ProductCartModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {ProductCartModule} from './pages/product-cart/product-cart.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductItemListComponent } from './common/product-item-list/product-item-list.component';
import { BussinessCardComponent } from './pages/bussiness-card/bussiness-card.component';
import { BannerAndSignageComponent } from './pages/banner-and-signage/banner-and-signage.component';
import { ImgsliderComponent } from './common/imgslider/imgslider.component';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { HeaderComponent } from './common/header/header.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { PanaflexComponent } from './pages/panaflex/panaflex.component';
import { BrochureComponent } from './pages/brochure/brochure.component';
import { MugPrintingComponent } from './pages/mug-printing/mug-printing.component';
import { TShirtComponent } from './pages/t-shirt/t-shirt.component';
import { KeyRingsComponent } from './pages/key-rings/key-rings.component';
import { FourColorStickerComponent } from './pages/four-color-sticker/four-color-sticker.component';
import { LogoDesignComponent } from './pages/logo-design/logo-design.component';
import { WebsiteDesigningComponent } from './pages/website-designing/website-designing.component';
import { EnvelopsComponent } from './pages/envelops/envelops.component';
import { NotepadsComponent } from './pages/notepads/notepads.component';
import { FileCoversComponent } from './pages/file-covers/file-covers.component';
import { BooksComponent } from './pages/books/books.component';
import { ShieldsComponent } from './pages/shields/shields.component';
import { StampsComponent } from './pages/stamps/stamps.component';
import { BagDesignComponent } from './pages/bag-design/bag-design.component';
import { PostersComponent } from './pages/posters/posters.component';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
// import { ProductDetailsComponent } from './common/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    CartComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ProductItemListComponent,
    BussinessCardComponent,
    BannerAndSignageComponent,
    ImgsliderComponent,
    TopBarComponent,
    HeaderComponent,
    CalenderComponent,
    PanaflexComponent,
    BrochureComponent,
    MugPrintingComponent,
    TShirtComponent,
    KeyRingsComponent,
    FourColorStickerComponent,
    LogoDesignComponent,
    WebsiteDesigningComponent,
    EnvelopsComponent,
    NotepadsComponent,
    FileCoversComponent,
    BooksComponent,
    ShieldsComponent,
    StampsComponent,
    BagDesignComponent,
    PostersComponent,
    ProductCartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', component:ProductItemListComponent},
      {path:'aboutUs', component:AboutUsComponent},
      {path:'contactUs', component:ContactUsComponent},
      {path:'productCart', component:CartComponent},
      {path:'products/0', component:BannerAndSignageComponent},
      {path:'products/1', component:BussinessCardComponent},
      {path:'products/2', component:CalenderComponent},
      {path:'products/3', component:BagDesignComponent},
      {path:'products/4', component:PanaflexComponent},
      {path:'products/5', component:PostersComponent},
      {path:'products/6', component:BrochureComponent},
      {path:'products/7', component:MugPrintingComponent},
      {path:'products/8', component:TShirtComponent},
      {path:'products/9', component:KeyRingsComponent},
      {path:'products/10', component:FourColorStickerComponent},
      {path:'products/11', component:LogoDesignComponent},
      {path:'products/12', component:WebsiteDesigningComponent},
      {path:'products/13', component:EnvelopsComponent},
      {path:'products/14', component:NotepadsComponent},
      {path:'products/15', component:FileCoversComponent},
      {path:'products/16', component:NotepadsComponent},
      {path:'products/17', component:BooksComponent},
      {path:'products/18', component:ShieldsComponent},
      {path:'products/19', component:StampsComponent},
      // {path:'products/1/standard-bussiness-card', component:ProductCartComponent},
    ]),
    ProductCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

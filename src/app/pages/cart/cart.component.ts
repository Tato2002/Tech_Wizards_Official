import { Component } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  username = 'ჯონი';
  prductName = 'Product Name';
  productURL = 'https://www.oukitel.co.za/cdn/shop/products/OukitelWP21UltraMainImage.jpg?v=1681820068';
  quantity:number = 0;

  plusProduct() {
    this.quantity++
  }
  minusProduct() {
    this.quantity--
  }
}

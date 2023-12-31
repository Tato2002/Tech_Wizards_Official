import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { productsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @ViewChild('imgShowcase') imgShowcase!: ElementRef;
  imgId = -1;



  products: Product | null = null;

constructor(private activatedrout: ActivatedRoute, private productsservice: productsService) {}



 ngOnInit() {

  // const productId = this.activatedrout.snapshot.paramMap.get('id');
  // if (productId) {
  //   this.productsservice.getProductDetails(Number(productId))
  //   .subscribe({
  //     next: (product) => {
  //       this.products = product;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching product:', error);

  //     }
  //   });
  //   console.log(productId)
  // }




    const imgBtns = document.querySelectorAll('.img-select a');

    imgBtns.forEach((imgItem: any) => {
      imgItem.addEventListener('click', (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        this.imgId = imgItem.dataset.id;
        this.slideImage();
      });
    });
 }

 slideImage(): void {
    const displayWidth = this.imgShowcase.nativeElement.querySelector('img:first-child').clientWidth;

    this.imgShowcase.nativeElement.style.transform = `translateX(${- (this.imgId - 1) * displayWidth}px)`;
 }

 @HostListener('window:resize', ['$event'])
 onResize(event: any): void {
    this.slideImage();
 }



//  droebit1 = 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8e627b5d2725cbb6b4d66e1772fb6eb4.jpg?imageView2/2/w/800/q/70/format/webp'
//  droebit2 = 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/29071bab5c907c23a4a94291cc720478.jpg?imageView2/2/w/800/q/70/format/webp';
//  droebit3 = 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1bbefdac406d5bb7e5b020b63f0de2a0.jpg?imageView2/2/w/800/q/70/format/webp';
//  droebit4 = 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/05e691e715138af6fa24350c0fe97617.jpg?imageView2/2/w/800/q/70/format/webp';

}

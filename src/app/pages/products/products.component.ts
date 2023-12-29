import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/product.model';
import { productsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   count = 0;
   products:Product[] = [];
   private unsubscribe = new Subject<void>();

   @ViewChild('cart')cart!: ElementRef;

   constructor(private renderer: Renderer2, private productsService: productsService, private router: Router) {}


   onAddToCart(event:any) {

    this.count++;
      let cart = this.cart.nativeElement;
      let img = event.target.parentElement.parentElement.parentElement.getElementsByTagName('img')[0];

      if (img) {
        let imgRect = img.getBoundingClientRect();
        let clone = img.cloneNode(true);

        this.renderer.setStyle(clone, 'position', 'absolute');
        this.renderer.setStyle(clone, 'z-index', '1000');
        this.renderer.setStyle(clone, 'left', imgRect.left + 'px');
        this.renderer.setStyle(clone, 'top', imgRect.top + 'px');
        this.renderer.setStyle(clone, 'width', imgRect.width + 'px');
        this.renderer.setStyle(clone, 'height', imgRect.height + 'px');
        this.renderer.setStyle(clone, 'opacity', '0.8');

        this.renderer.appendChild(document.body, clone);

        let startTime:any = null;
        const animationDuration = 1000;

        const animate = (time:any) => {
          if (startTime === null) startTime = time;
          const progress = time - startTime;
          const percentage = Math.min(progress / animationDuration, 1);

          const top = imgRect.top + (cart.getBoundingClientRect().top - imgRect.top) * percentage;
          const left = imgRect.left + (cart.getBoundingClientRect().left - imgRect.left) * percentage;
          const width = imgRect.width * (1 - percentage);
          const height = imgRect.height * (1 - percentage);

          this.renderer.setStyle(clone, 'left', left + 'px');
          this.renderer.setStyle(clone, 'top', top + 'px');
          this.renderer.setStyle(clone, 'width', width + 'px');
          this.renderer.setStyle(clone, 'height', height + 'px');

          if (progress < animationDuration) {
            requestAnimationFrame(animate);
          } else {
            this.renderer.removeChild(document.body, clone);
          }
        };
        requestAnimationFrame(animate);
      }
   }

   ngOnInit() {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
       this.products = products;
    });
   }

   onProductClick(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }



  }




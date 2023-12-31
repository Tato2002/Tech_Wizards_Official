import { Injectable } from "@angular/core";
import { Product } from "../Models/product.model";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor(private http:HttpClient) {}

  private productsUrl = '/products.json'
  private productDetailsUrl = '/products/:id.json';
  product: Product | null = null;

  getAllProducts(){
    // return this.http.get<{[key: string]: Product}>(this.productsUrl)
    // .pipe(map((res) => {
    //   const products = []
    //     for (const key in res) {
    //         let product: Product = {
    //           pImgUrl1: res[key].pImgUrl1,
    //           pImgUrl2: res[key].pImgUrl2,
    //           pImgUrl3: res[key].pImgUrl3,
    //           pImgUrl4: res[key].pImgUrl4,
    //           pName: res[key].pName,
    //           pDesc: res[key].pDesc,
    //           pDescLong: res[key].pDescLong,
    //           pPrice: res[key].pPrice,
    //           pQuantity: res[key].pQuantity,
    //           id: key
    //         }
    //         products.push(product)
    //       }
    //       return products;
    //     }))
 }



getProductDetails(productId: number): Observable<Product> {
  return this.http.get<Product>(this.productDetailsUrl.replace(':id', productId.toString()))
  .pipe(
    catchError((error) => {
      console.error('Error fetching product details:', error);
      return of(new Product());
    })
  );

}


 }

import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class ScrollTopService {

 constructor() { }

 scrollTop() {
    window.scrollTo(0, 0);
 }
}

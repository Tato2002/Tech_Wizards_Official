import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/services/scroll-top.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private scrolltopservice: ScrollTopService) {}

  logedIn = false;
  isOpen: boolean = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.isOpen = false;
    }, 1000);
  }


  clickedOutside() {
    this.toggleSidenav()
  }

  scrollToTop() {
    this.scrolltopservice.scrollTop();
 }



ngOnInit(): void {

}


 }


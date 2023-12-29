import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/services/scroll-top.service';
import * as Typewriter from 't-writer.js';



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
  const target = document.querySelector('.tw');

  const writer = new Typewriter(target, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: '#5a1aa2'
  })

  writer
    .type('Welcome To')
    .rest(500)
    .changeOps({ deleteSpeed: 80 })
    .remove(11)
    .type('TECH WIZARDS')
    .rest(5000)
    .remove(12)
    .type('TECH WIZARDS')
    .rest(500)
    .changeOps({ deleteSpeed: 20 })
    .remove(21)
    .type('Artificial Legacy')
    .rest(5000)
    .clear()
    .start()
 }

}


import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';
import { ScrollTopService } from 'src/app/services/scroll-top.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit{

  constructor(private scrolltopService: ScrollTopService) {}

  ngOnInit(): void {
    this.scrolltopService.scrollTop();
  }

  slides: SlideInterface[] = [
    { url: '../src/assets/web-gif.gif', title: 'img' },
    { url: '../src/assets/template.jpg', title: 'img' },
    { url: '../src/assets/template2.jpg', title: 'img' },
    { url: '../src/assets/template6.gif', title: 'img' },
  ];

}


import { Component } from '@angular/core';
import { ScrollTopService } from 'src/app/services/scroll-top.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logedIn = false;

  constructor(private scrolltopservice: ScrollTopService) {}
  scrollTop() {
    this.scrolltopservice.scrollTop();
  }
}

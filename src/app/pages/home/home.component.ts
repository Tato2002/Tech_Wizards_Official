import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  hoverText = `ვებ დეველოპმენტი საქართველოში ჯერ კიდევ ვითარდება, დამკვიდრებულ ბაზრებთან შედარებით ნაკლები სააგენტოები და თავისუფალი დეველოპერებია. რის გამოც არის დაბალი კონკურენცია და პოტენციურად დაბალი ფასები.`
  hoverText2 = ' ხოლო ჩვენთან... ფასები უფრო დაბალია!!!'


  @ViewChild('myVideo') videoElement!: ElementRef;

  unmuteV() {
    (this.videoElement.nativeElement as HTMLVideoElement).muted = !(this.videoElement.nativeElement as HTMLVideoElement).muted;
  }

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("TECH WIZARDS")
  }

}

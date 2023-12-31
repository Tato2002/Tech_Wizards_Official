import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  changetype:boolean = false;
  muted:boolean = true;

  @ViewChild('myVideo') videoElement!: ElementRef;

  unmuteV() {
    (this.videoElement.nativeElement as HTMLVideoElement).muted = !(this.videoElement.nativeElement as HTMLVideoElement).muted;
    this.changetype = !this.changetype;
    this.muted = !this.muted;
  }

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("TECH WIZARDS")
  }

}

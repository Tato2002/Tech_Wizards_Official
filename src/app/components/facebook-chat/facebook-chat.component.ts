import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
 selector: 'app-facebook-chat',
 template: `
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
 `,
})
export class FacebookChatComponent implements OnInit {
 constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

 ngOnInit() {
    this.loadFacebookSdk();
 }

 private loadFacebookSdk() {
    const fbScript = this.renderer.createElement('script');
    fbScript.setAttribute('id', 'facebook-jssdk');
    this.renderer.setAttribute(
      fbScript,
      'src',
      'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    );
    this.renderer.appendChild(this.elementRef.nativeElement, fbScript);

    (window as any).fbAsyncInit = () => {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };
 }
}

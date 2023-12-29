import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit, OnInit{

visible:boolean = true;
visible2:boolean = true;
changetype:boolean = true;
changetype2:boolean = true;
error = '';
error2 = '';

viewPass(){
this.visible = !this.visible;
this.changetype = !this.changetype;
}
viewPass2(){
 this.visible2 = !this.visible2;
 this.changetype2 = !this.changetype2;
}
 @ViewChild('loginForm') loginForm!: ElementRef;
 @ViewChild('loginText') loginText!: ElementRef;
 @ViewChild('loginBtn') loginBtn!: ElementRef;
 @ViewChild('signupBtn') signupBtn!: ElementRef;

 constructor(private renderer: Renderer2, private router:Router) {}

 ngOnInit() {
 }

 ngAfterViewInit() {

    this.renderer.listen(this.signupBtn.nativeElement, 'click', () => {
      this.onSignupBtnClick();
    });

    this.renderer.listen(this.loginBtn.nativeElement, 'click', () => {
      this.onLoginBtnClick();
    });

    this.onSignupFormValueChange();

}

onSignupBtnClick() {
    this.renderer.setStyle(this.loginForm.nativeElement, 'marginLeft', '-50%');
    this.renderer.setStyle(this.loginText.nativeElement, 'marginLeft', '-50%');
}

onLoginBtnClick() {
    this.renderer.setStyle(this.loginForm.nativeElement, 'marginLeft', '0%');
    this.renderer.setStyle(this.loginText.nativeElement, 'marginLeft', '0%');
}

onSignupFormValueChange() {
    this.signupForm.valueChanges.subscribe((form) => {
        if (this.signupForm.valid && form.confirmPassword === form.password) {
            console.log(form);
        }
        if (form.confirmPassword === form.password) {
            this.error2 = '';
        }
        else {
          this.error2 = 'პაროლები არ ემთხვევა';
        }
    });
}

 signinForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
 });


 signupForm = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
});


reset() {
 this.signinForm.reset();
 this.signupForm.reset();
}

 onSignin() {
 if (this.signinForm.valid) {
    this.router.navigate(['/home']);
    console.log(this.signinForm.value)

 }
 else {
    this.error = 'არასწორია ელ. ფოსტა ან პაროლი ';
 }
}

onSignup() {
 if (this.signupForm.valid && this.signupForm.value.confirmPassword === this.signupForm.value.password) {
    console.log(this.signupForm.value);
    }   else {
      this.onSignupFormValueChange();
    }
 }

}


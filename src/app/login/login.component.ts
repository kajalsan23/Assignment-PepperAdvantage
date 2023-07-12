import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    public router: Router,
    private elementRef: ElementRef,
    public toastr: ToastrService,
    public service: FeedbackService
  ) {}

  ngOnInit(): void {
    this.service.logInUser();
  }

  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'yourColor';
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Form is valid, handle form submission here
      let data = localStorage.getItem('login') || '{}';
      if (
        JSON.parse(data).email == form.value.username ||
        JSON.parse(data).password == form.value.password
      ) {
        this.service.setLoginStatus(true);
        this.toastr.success('', 'Successfully Logged In !');
        this.router.navigate(['/list']);
      } else {
        this.toastr.warning('Warn', 'Please Enter Valid Usermane or Password');
      }
    } 
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
})
export class AddFeedbackComponent implements OnInit {
  feedback: string = '';
  rating: number = 0;
  constructor(
    public router: Router,
    public toastr: ToastrService,
    public service: FeedbackService
  ) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    if (form.valid) {
      let newData = {
        user_id: '6',
        feedback: form.value.feedback,
        rating: form.value.rating,
        date: '14/06/2023',
      };

      this.service.postData(newData);
      this.toastr.success('', 'Added SuccessFully');
      this.router.navigate(['/list']);
    } else {
      this.toastr.warning('', 'please Fill Form');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'],
})
export class FeedbackListComponent implements OnInit {
  ListData: any;
  constructor(public service: FeedbackService, public router: Router) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.ListData = data;
    });
  }

  add() {
    this.router.navigate(['/add']);
  }
}

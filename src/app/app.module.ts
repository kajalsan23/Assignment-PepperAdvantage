import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AddFeedbackComponent } from './feedback-list/add-feedback/add-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { FeedbackService } from './service/feedback.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './service/authguard.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackListComponent,
    AddFeedbackComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbRatingModule 

  ],
  providers: [ToastrService,FeedbackService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

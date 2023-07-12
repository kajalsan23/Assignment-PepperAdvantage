import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './feedback-list/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: FeedbackListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddFeedbackComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

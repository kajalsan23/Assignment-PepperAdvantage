import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { FeedbackService } from './feedback.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: FeedbackService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.LoginStatus) {
      this.router.navigate(['login']);
    }
    return this.authService.LoginStatus;
  }
}

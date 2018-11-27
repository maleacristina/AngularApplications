import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
    canActivate() {
        if ( this.authService.isLoggedIn() ) {
          // this.router.navigate(['/items']);
          return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}

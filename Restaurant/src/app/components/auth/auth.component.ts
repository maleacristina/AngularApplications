import { Component, OnInit, HostBinding} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  email: string;
  password: string;
  // isUserLoggedIn: boolean;

  constructor(public authService: AuthService) {

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
     // this.authService.setUserLoggedIn();
       // this.router.navigate(['items']);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}

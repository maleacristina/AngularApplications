import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  // isUserLoggedIn: boolean;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    // this.isUserLoggedIn = false;

  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        // this.router.navigate(['/items']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        // alert('I am an alert box!');
        window.alert('Invalid email or password');
      });
  }
/*   setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  } */

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}

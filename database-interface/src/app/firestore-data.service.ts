import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class FirestoreDataService {
  userscollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  constructor(public _afs: AngularFirestore) {
    this.userscollection = this._afs.collection('Users', x => x.orderBy('firstname', 'asc'));
    this.users = this.userscollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as User;
            data.id = a.payload.doc.id;
            return data;
          });

      });

  }
  getUsers() {
    return this.users;
  }
  addUser(user) {
    this.userscollection.add(user);
  }
  deleteUser(user) {
    this.userDoc = this._afs.doc(`Users/${user.id}`);
    this.userDoc.delete();
  }
}

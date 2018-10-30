import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from './firestore-data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arr: User[] = [];
  model = { firstname: '', lastname: '', mobile_no: '' };
  ngOnInit() {

    this._data.getUsers().subscribe(
      (user: User[]) => {
        this.arr = user;
        console.log(this.arr);
      }
    );
  }

  constructor(public _data: FirestoreDataService) {

  }
  userSubmit() {
    this._data.addUser(this.model);
    this.model.firstname = '';
    this.model.lastname = '';
    this.model.mobile_no = '';
  }
  onDelete(user) {
    this._data.deleteUser(user);
  }
}

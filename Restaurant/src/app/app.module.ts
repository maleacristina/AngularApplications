import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AuthComponent } from './components/auth/auth.component';



// Routes
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'items', component: ItemsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    BsDatepickerModule.forRoot(),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AuthGuardService } from './services/auth-guard.service';
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

// import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AuthComponent } from './components/auth/auth.component';



// Routes
import { Routes, RouterModule, CanActivate } from '@angular/router';

const appRoutes: Routes = [
  // {path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path: '', component: AuthComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'add-item', canActivate: [AuthGuardService], component: AddItemComponent},
  {path: 'items', canActivate: [AuthGuardService], component: ItemsComponent},
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
    RouterModule.forRoot(appRoutes),
    // MatButtonModule
  ],
  providers: [
    ItemService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

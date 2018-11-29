import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: Category[];

  constructor(public categoryService: CategoryService, public authService: AuthService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      // console.log(items);
      this.categories = categories;
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from 'src/app/models/item';
import { TouchSequence } from 'selenium-webdriver';
import { AuthService } from 'src/app/services/auth.service';
import { Soup } from 'src/app/models/soup';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  // soups: Soup[];
  editState =  false;
  itemToEdit: Item;

  constructor(private itemService: ItemService, private authService: AuthService) { }

  ngOnInit() {
   this.itemService.getItems().subscribe(items => {
    // console.log(items);
    this.items = items;
  });


  }
  deleteItem(event, item: Item) {
  this.clearState();
   this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }


}

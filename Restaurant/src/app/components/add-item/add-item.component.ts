import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    name: '',
    price: 0,
    days: []
  };
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

   onSubmit() {
     if (this.item.name !== '' && this.item.price !== 0 && this.item.days[0] !== [] && this.item.days[1] !== []) {
       this.itemService.addItem(this.item);
       this.item.name = '';
       this.item.price = 0;
       this.item.days = [];
     }
   }
}

import { Component, OnInit } from '@angular/core';

import { Effect, Item, items } from '../gamedata/gamedata';
import { DataService } from '../gamedata/dataservice';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  allItems: Item[];
  selectedItems: Item[];

  constructor(private dataService: DataService) { 
    this.allItems = items;
    this.selectedItems = [];
  }

  ngOnInit() {

  }

  addItem(item: Item) {
    const existingItem = this.selectedItems.find((existing) => {
      return existing.name == item.name;
    });
    if(!existingItem) {
      item.count = 1;
      this.selectedItems.push(item);
    } else {
      existingItem.count++;
    }
    this.dataService.changeItems(this.selectedItems);
  }

  removeItem(item: Item) {
    let index = -1;
    const existingItem = this.selectedItems.find((existing, i) => {
      if(existing.name == item.name) {
        index = i;
      }
      return existing.name == item.name;
    });
    existingItem.count--;
    if(existingItem.count == 0) {
      this.selectedItems.splice(index, 1);
    }
    this.dataService.changeItems(this.selectedItems);
  }

}
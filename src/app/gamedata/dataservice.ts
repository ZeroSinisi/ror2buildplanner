import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Character, characters, Item } from './gamedata';

@Injectable()
export class DataService {

  private characterMessage: BehaviorSubject<Character>;
  selectedCharacterObservable: Observable<Character>;

  private itemsMessage: BehaviorSubject<Item[]>;
  selectedItemsObservable: Observable<Item[]>;

  constructor() {
    this.characterMessage = new BehaviorSubject<Character>(characters[0]);
    this.selectedCharacterObservable = this.characterMessage.asObservable();
    this.itemsMessage = new BehaviorSubject<Item[]>([]);
    this.selectedItemsObservable = this.itemsMessage.asObservable();
  }

  changeCharacter(character: Character) {
    this.characterMessage.next(character);
  }

  changeItems(items: Item[]) {
    this.itemsMessage.next(items);
  }

}
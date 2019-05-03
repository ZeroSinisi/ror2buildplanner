import { Component, OnInit } from '@angular/core';

import { Character, Effect, Item } from '../gamedata/gamedata';
import { DataService } from '../gamedata/dataservice';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentLevel: number;
  currentDamage: number;
  currentHealth: number;
  currentAttackSpeed: number;
  currentMoveSpeed: number;
  currentCritChance: number;

  selectedCharacter: Character;
  selectedItems: Item[];

  constructor(private dataService: DataService) {
    this.selectedItems = [];
    this.dataService.selectedCharacterObservable.subscribe((character) => {
      this.selectedCharacter = character;
      this.calculateStats();
    });
    this.dataService.selectedItemsObservable.subscribe((items) => {
      this.selectedItems = items;
      this.calculateStats();
    });
    this.currentLevel = 1;
  }

  ngOnInit() {
    this.calculateStats();
  }

  calculateStats() {
    const bonus = {
      attackSpeed: 0,
      critChance: 0,
      moveSpeed: 0
    }
    this.selectedItems.forEach((item) => {
      switch(item.effect) {
        case Effect.AttackSpeed:
          bonus.attackSpeed+= (item.value * item.count);
          break;
        case Effect.CritChance:
          bonus.critChance+= (item.value * item.count);
          break;
        case Effect.MoveSpeed:
          bonus.moveSpeed+= (item.value * item.count);
          break;
        default:
          break;
      }
    });

    this.currentDamage = Math.round(
      this.selectedCharacter.baseDamage + 
      (this.selectedCharacter.damagePerLevel * (this.currentLevel - 1))
    );

    this.currentHealth = Math.round(
      this.selectedCharacter.baseHealth + 
      (this.selectedCharacter.healthPerLevel * (this.currentLevel - 1))
    );

    this.currentMoveSpeed = Math.round((
      1 + (bonus.moveSpeed / 100)
    ) * 100);

    this.currentAttackSpeed = Math.round((
      this.selectedCharacter.baseAttackSpeed + (bonus.attackSpeed / 100)
    ) * 100);

    this.currentCritChance = Math.round((
      (bonus.critChance / 100)
    ) * 100);
  }

}

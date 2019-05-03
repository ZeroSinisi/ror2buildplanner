import { Component, OnInit } from '@angular/core';

import { Character, characters } from '../gamedata/gamedata';
import { DataService } from '../gamedata/dataservice';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;

  constructor(private dataService: DataService) { 
    this.characters = characters;
    this.dataService.selectedCharacterObservable.subscribe((character) => {
      this.selectedCharacter = character;
    });
  }

  ngOnInit() {
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
    this.dataService.changeCharacter(this.selectedCharacter);
  }

}
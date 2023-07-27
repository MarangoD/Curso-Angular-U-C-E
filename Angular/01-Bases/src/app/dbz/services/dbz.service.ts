import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  constructor() {}

  public getListCharacter(): Character[] {
    return this.characters;
  }

  public addNewCharacter(event: Character): void {
    const newCharacter: Character = { id: uuid(), ...event };
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string) {
    const indexCharacterToDelete = this.characters.findIndex(
      (character) => character.id === id
    );
    this.characters.splice(indexCharacterToDelete, 1);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css'],
})
export class ListPersonajesComponent {
  @Input()
  public characterList: Character[] = [];
  @Output()
  public emitIndexCharacters: EventEmitter<string> = new EventEmitter<string>();

  public deleteCharacter(index: number) {
    this.emitIndexCharacters.emit(this.characterList[index].id);
  }
}

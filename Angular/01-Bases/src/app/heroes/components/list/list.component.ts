import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spider-Man',
    'Thor',
    'Hulk',
    'Iron Man',
    'Captain America',
    'Black Widow',
    'She-Hulk',
  ];
  public deleteHeros?: string;

  deleteLastHero(): void {
    this.deleteHeros = this.heroNames.pop();
  }
}

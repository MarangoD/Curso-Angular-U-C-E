import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
    // return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  public getHeroDescription(): string {
    // return this.name +'is'+ this.age +'years old';
    // return this.capitalizedName +'is'+ this.age +'years old';
    return `${this.capitalizedName} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'iron Man';
    this.age = 45;
  }
}

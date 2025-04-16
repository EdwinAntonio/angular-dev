import { UpperCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe] //Los pipes nos ayudan a poder modificar los datos de una forma SOLAMENTE visual en una interfaz HTML
})

export class HeroPageComponent{

  // -------- Variables
  name = signal('Ironman');
  age = signal(45);

  // -------- Methods
  getHeroDescription(){
    return `${this.name()} - ${this.age()}`; //Cuando se trabaja con Signals siempre las variables signals tenemos que invocarlas con un '()' al final
  }

  resetForm() {
    this.name.update(name => name = 'Ironman');
    this.age.update(age => age = 45)
  }

  changeHero() {
    this.name.update(name => name = 'Spiderman');
    this.age.update(age => age = 22);
  }

  changeAge(){
    this.age.set(60)
  }
}

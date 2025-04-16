import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-insert',
  templateUrl: './character-insert.component.html',
  imports: [

  ],
})
export class CharacterInsertComponent {
  name = signal('Picolo');
  power = signal(10);

                  // El output con O en minuscula signfica que es la funcion para comunicar, no es un decorador
                  // entonces le decimos que vamos a emitir un Character haciendo referencia desde newCharacterOf
  newCharacterOf = output<Character>();

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12},
    { id: 2, name: 'Vegueta', power: 22},
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <=0 ){
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) +1,
      name: this.name(),
      power: this.power()
    };
                    // El emit nos sirve como Outupu y mandar datos al exterior entre componentes de Angular
    this.newCharacterOf.emit(newCharacter);
    console.log(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
 }

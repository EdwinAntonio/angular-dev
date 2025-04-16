import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterInsertComponent } from "../../components/dragonball/character-insert/character-insert/character-insert.component";
import { Character } from "../../interfaces/character.interface";


@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterInsertComponent
]
})

export class DragonBallSuperPageComponent{

  name = signal('Picolo');
  power = signal(10);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12},
    { id: 2, name: 'Vegueta', power: 22},
  ]);

  addCharacter(char: Character){
    this.characters.update((list) => [...list,char])
  }
}

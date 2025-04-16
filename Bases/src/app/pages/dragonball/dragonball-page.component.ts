import { Component, signal } from "@angular/core";

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [

  ]
})

export class DragonBallPageComponent{

  name = signal('Picolo');
  power = signal(10);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12},
    { id: 2, name: 'Vegueta', power: 22},
    { id: 3, name: 'Trunks', power: 32},
    { id: 4, name: 'Krilin', power: 42}
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <=0 ){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
                    //Los ... significan que hacen referencia a la misma variable de la funcion tipo flecha
    this.characters.update((newChar) => [...newChar,newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}

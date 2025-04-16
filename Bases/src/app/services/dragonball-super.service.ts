import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonBallService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 12},
    { id: 2, name: 'Vegueta', power: 22},
  ]);

  addCharacter(char: Character){
    this.characters.update((list) => [...list,char])
  }

  //Para almacenar información en el local storage del navegador
  saveOnLocalStorage = effect(efc =>  {
    //El JSON.stringify nos ayuda a convertir todo el objeto en string para ser aceptado
    //por el mismo setItem() ya que requiere de ambos parametros como string forzosamente
    localStorage.setItem('characters',JSON.stringify(this.characters()));
  });

  /*Para leer la informacion desde el local storage
    loadFromLocalStorage = (): Character[] => {
      const charac = localStorage.getItem('characters');
      return charac ? JSON.parse(charac) : [] ;
    };*/

  //characters = signal<Character[]>(this.loadFromLocalStorage());
}

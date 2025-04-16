import { DragonBallService } from './../../services/dragonball-super.service';
import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterInsertComponent } from "../../components/dragonball/character-insert/character-insert/character-insert.component";



@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterInsertComponent
]
})

export class DragonBallSuperPageComponent{

    /*Otra manera de injectar dependencias
    constructor(public draService: DragonBallService){

    }*/

    //La manera mas recomendable de hacer una injeccion de dependencias
    public dragonBallSuperService = inject(DragonBallService);

  }

import { Component } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent{
  counter = 10
  increaseBy(value : number){
    this.counter += value
  }
  restartCounter(){
    this.counter = 10
  }
}

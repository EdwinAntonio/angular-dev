import { Component, signal, Signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent{
  counter = 10

  /* Signals are only another way to use data in a quickly way instead the tradicional declarations
     and you'll able to used with set(), update(), delete() declarations becuase Signal declarations
     must to be used as FUNCTIONS always
  */
  counterSignal = signal(10)

  increaseBy(value : number){
    this.counter += value
    this.counterSignal.update((current) => current + value)
  }
  restartCounter(){
    this.counter = 10
    this.counterSignal.set(10)
  }
}

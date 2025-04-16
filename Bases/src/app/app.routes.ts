import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonBallPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonBallSuperPageComponent
  },
  {
    path: '**',  //Este tipo de Path nos permite que cuando el usuario meta una URL incorrecta lo redirija al path especifico
    redirectTo: ''
  }
];

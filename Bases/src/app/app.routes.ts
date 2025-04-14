import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterComponent
  }
];

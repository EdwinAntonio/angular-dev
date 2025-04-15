import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBar } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application 1';
}

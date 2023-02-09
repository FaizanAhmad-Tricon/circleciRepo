import { Component } from '@angular/core';
import {getFullName}    from "./helper";

@Component({
  selector: '.app-root ,app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';

  counter:number = 0;

  fullName :string;

  constructor()
  {
    this.fullName=getFullName("Faizan","Ahmad");
  }
}

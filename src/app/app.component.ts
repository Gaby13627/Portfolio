import { Component, OnInit } from '@angular/core';

export enum page{
  HOME = "HOME",
  PROJECT = "PROJECT",
  ABOUT = "ABOUT"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  actualState:page = page.HOME
  enumState = page
  constructor() { }

  ngOnInit(): void {

  }

  changeState(nexState:page){
    this.actualState = nexState

  }

}

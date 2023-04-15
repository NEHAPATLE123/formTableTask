import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from './shared/components/model/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'inOutTaskcard';

@Output() stdinof: EventEmitter<Istd> = new EventEmitter<Istd>()

  stdArray1: Array<Istd> = [
    {
    fname: "jhon",
    lname: "doe",
    email: "jhon@12314",
    contact: 123435,
    },
    {
      fname: "virat",
      lname: "sekh",
      email: "sekh@12314",
      contact: 765635,
    }
   
]
stdArray2 : Array<Istd> = [
  {
  fname: "jhon",
  lname: "doe",
  email: "jhon@12314",
  contact: 123435,
  },
  {
    fname: "virat",
    lname: "sekh",
    email: "sekh@12314",
    contact: 765635,
  }
 
]

stdArray3 : Array<Istd> = [
  {
  fname: "jhon",
  lname: "doe",
  email: "jhon@12314",
  contact: 123435,
  },
  {
    fname: "virat",
    lname: "sekh",
    email: "sekh@12314",
    contact: 765635,
  }
 
]

formDetail(stds: Istd) {
 this.stdArray1.push(stds)
}

dolller(std1:Istd){
  this.stdArray2.push(std1)
}

dollerEve(ndf: Istd){
  this.stdArray3.push(ndf)
}

  ngOnInit(): void {
    
  }
 
}

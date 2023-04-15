import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

@Output() fromStd : EventEmitter<Istd> = new EventEmitter<Istd>()

  fnameValue! : string;
  lnameValue! : string;
  emailValue! : string;
  contactValue! : string;

  onAddStudent(){
    // console.log(this.fnameValue)
    let obj : Istd = {
      fname: this.fnameValue,
      lname: this.lnameValue,
      email: this.emailValue,
      contact: +this.contactValue
    }
    console.log(obj)
    this.fromStd.emit(obj)

    this.fnameValue = '';
    this.lnameValue = '';
    this.emailValue = '';
    this.contactValue = '';
  }


  constructor() { }

  ngOnInit(): void {
  }

}

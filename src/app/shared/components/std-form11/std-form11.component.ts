import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-form11',
  templateUrl: './std-form11.component.html',
  styleUrls: ['./std-form11.component.scss']
})
export class StdForm11Component implements OnInit {
 
  @Output() stdform11 : EventEmitter<Istd> = new EventEmitter<Istd>()

  // fnameValue! : string;
  // lnameValue! : string;
  // emailValue! : string;
  // contactValue! : string;

  onAddStudent(fnameVal: HTMLInputElement, lnameVal: HTMLInputElement, emailVal:HTMLInputElement, contactVal:HTMLInputElement){

console.log(fnameVal.value);

    let obj : Istd = {
      fname: fnameVal.value,
      lname: lnameVal.value,
      email: emailVal.value,
      contact: +contactVal.value
    }
  this.stdform11.emit(obj)
  
  }

  ngOnInit(): void {
   
  }

  //   this.fnameValue = '';
  //   this.lnameValue = '';
  //   this.emailValue = '';
  //   this.contactValue = '';
  // }


}
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-form22',
  templateUrl: './std-form22.component.html',
  styleUrls: ['./std-form22.component.scss']
})
export class StdForm22Component implements OnInit {

  @Output() customEve : EventEmitter<Istd> = new EventEmitter<Istd>()

  @ViewChild('fnameVal') fnam11!: ElementRef
  @ViewChild('lnameVal') fnam12!: ElementRef
  @ViewChild('emailVal') fnam13!: ElementRef
  @ViewChild('contactVal') fnam14!: ElementRef

  // fnameValue! : string;
  // lnameValue! : string;
  // emailValue! : string;
  // contactValue! : string;

  onAddStudent(){
   
    let obj : Istd = {
      fname: this.fnam11.nativeElement.value,
      lname: this.fnam12.nativeElement.value,
      email: this.fnam13.nativeElement.value,
      contact: +this.fnam14.nativeElement.value,
    }
    console.log(obj)
    this.customEve.emit(obj)

    this.fnam11.nativeElement.value = '';
    this.fnam12.nativeElement.value= '';
    this.fnam13.nativeElement.value = '';
    this.fnam14.nativeElement.value = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

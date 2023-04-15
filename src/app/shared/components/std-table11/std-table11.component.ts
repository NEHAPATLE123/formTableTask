import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-table11',
  templateUrl: './std-table11.component.html',
  styleUrls: ['./std-table11.component.scss']
})
export class StdTable11Component implements OnInit {
  @Input() std12! : Array<Istd>

  formDetail! : string;

  constructor() { }

  ngOnInit(): void {
  }

}

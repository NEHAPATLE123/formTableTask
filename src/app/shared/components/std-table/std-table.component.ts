import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

@Input() tableArray! : Array<Istd>

formDetail! : string;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tableArray)
  }

}

import { Component, OnInit , Input} from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-table22',
  templateUrl: './std-table22.component.html',
  styleUrls: ['./std-table22.component.scss']
})
export class StdTable22Component implements OnInit {
  @Input() custom! : Array<Istd>

  formDetail! : string;
  
   
  
  constructor() { }

  ngOnInit(): void {
  }

}

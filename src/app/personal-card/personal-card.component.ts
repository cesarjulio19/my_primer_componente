import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  @Input() name:string = "";
  @Input() surname:string = "";
  @Input() age:number = 0;

  constructor() { }

  ngOnInit() {}

}

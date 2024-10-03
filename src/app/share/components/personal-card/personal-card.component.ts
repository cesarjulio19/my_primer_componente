import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { cardPerson } from '../../../home/home.page';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  alertButtons = ['Action'];
  @Input() name:string = "";
  @Input() surname:string = "";
  @Input() age:number = 0;
  @Input() fav:boolean = false;

  @Output() onFavClicked:EventEmitter<cardPerson> = new EventEmitter<cardPerson>();
  @Output() onDeleteClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  
  onFavClick(event: any){

    this.onFavClicked.emit({
      isFav:!(this.fav),
      name: this.name,
      surname: this.surname,
      age: this.age,
    });
    this.fav = !this.fav
    event.stopPropagation();

  }

  onDeleteClick(event: any){
    this.onDeleteClicked.emit();
    event.stopPropagation();
  }

  ngOnInit() {}

}

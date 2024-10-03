import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { cardPerson } from '../../../home/home.page';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  alertButtons = ['Action'];
  private _isFav:boolean = false;
  @Input() name:string = "";
  @Input() surname:string = "";
  @Input() age:string = "";
  @Input() set isFav(value:boolean){
    this._isFav = value;
  }

  get isFav():boolean{
    return this._isFav;
  }

  @Output() favClicked:EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteClicked:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  
  onFavClick(event: any){

    this.favClicked.emit();

  }

  onDeleteClick(event: any){
    this.deleteClicked.emit();
  }

  ngOnInit() {}

}

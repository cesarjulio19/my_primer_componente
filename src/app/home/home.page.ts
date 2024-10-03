import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleService } from '../share/service/people.service';


export interface Person {
  name:string,
  surname:string,
  age:number
}

export interface cardPerson extends Person{
  isFav:boolean
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('formulario') formulario: NgForm | undefined;

  constructor(public peopleSvc:PeopleService) {
  }
  // añade una persona
  addPerson(){

    this.peopleSvc.add({
      name: this.formulario?.value.name,
      surname: this.formulario?.value.surname,
      age: this.formulario?.value.age,
    })

  }
  // elimina una persona
  onDeleteClicked(id: string){
    let person = this.peopleSvc.get(id)
    if(person){
      this.peopleSvc.remove(person);
    }else{
      console.log('Persona no encontrada');
    }
  }

  onFavClicked(idx:number){
    //this.people[idx].isFav = !this.people[idx].isFav
  }



}

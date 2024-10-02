import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Person{
  name:string,
  surname:string,
  age:number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('formulario') formulario: NgForm | undefined;

  people:Person[] = [];
  constructor() {
    /*this.people.push({
      name:"Juan A.",
      surname:"García Gómez",
      age:47
    });
    this.people.push({
      name:"Alejandro.",
      surname:"García Gómez",
      age:46
    });

    this.people.push({
      name:"Juan",
      surname:"García Valencia",
      age:5
    });

    this.people.push({
      name:"María del Mar",
      surname:"Valencia Valencia",
      age:47
    });*/
  }

  addPerson(){

    this.people.push({
      name: this.formulario?.value.name,
      surname: this.formulario?.value.surname,
      age: this.formulario?.value.age,

    });

  }

}

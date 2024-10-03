import { Injectable } from '@angular/core';
import { Crud } from '../interfaces/crud';
import { Person } from '../interfaces/person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Crud<Person>{

  private _id:number = 1;
  private _people:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  public people$:Observable<Person[]> = this._people.asObservable();

  constructor() { }
  //añadimos una persona
  add(element: Person): Person | null {
    try {
      element.id = (this._id).toString();
      this._id++;
      let people:Person[] = this._people.getValue();
      people.push(element);
      this._people.next(people);
      return element;  
    } catch (error) {
      return null;
    }
    
  }
  // eliminamos una persona
  remove(element: Person): Person | null {
    try {
      let people:Person[] = this._people.getValue();
      let idx = people.findIndex(p=>p.id==element.id);
      let person = people[idx];
      people.splice(idx,1);
      this._people.next(people);
      return person;
    } catch (error) {
      return null;
    }
  }
  // modifica una persona
  update(element: Person): Person | null {
    try {
      let people:Person[] = this._people.getValue();
      let idx = people.findIndex(p=>p.id==element.id);
      let person = people[idx];
      people[idx]=element;
      this._people.next(people);
      return person;
    } catch (error) {
      return null;
    }
  }
  // obtiene todas las personas
  getAll(): Person[] {
    return this._people.getValue();
  }
  // obtiene la persona con el id dado
  get(id: string): Person | null {
    let people:Person[] = this._people.getValue();
    let person:Person|undefined = people.find(p=>p.id == id);
    return !person?null:person;
  }
}

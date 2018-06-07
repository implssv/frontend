import { Injectable } from '@angular/core';
import { Person } from './../model/person.model'
@Injectable()
export class PersonService {

  persons: Person[]

  constructor() {



    this.persons = [new Person('Mateusz', 1995), new Person('Seba', 1992), new Person('Anonymous', 2138)];


  }

  getPersons() {
    return this.persons;
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }
}

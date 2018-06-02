import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {


  persons : Person[];
  selectedPerson: Person;

  constructor() { 


    this.persons = [ new Person('Seba'), new Person('Anon')]

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Person } from '../../model/person.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {




  // persons : Observable[]
  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;
  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group(
      {

        'imie': ['Podaj imie',[Validators.required, Validators.minLength(5), this.myImieValidator]],
        'rokUr': ['rok urodzenia',[Validators.required, Validators.max(2000)]]


      });

    this.imie = this.myForm.controls['imie'];
    this.rokUr = this.myForm.controls['rokUr'];
    
  }

  ngOnInit() {
  }

  mySubmit(value: any) {

    console.log(this.personService.getPersons());
    let person = new Person(this.imie.value, this.rokUr.value);

    this.personService.addPerson(person);

    console.log(this.personService.getPersons());


  }


  myImieValidator(control: FormControl) {

    if(control.value.match(/^Bol/i))
    {
      return{
      "bolekValue":true
      }
    }

  }
}

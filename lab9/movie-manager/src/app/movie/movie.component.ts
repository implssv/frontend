import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../service/movieService';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  myForm: FormGroup;
  title: AbstractControl;
  rating: AbstractControl;
  productionyear: AbstractControl;


  constructor(fb: FormBuilder, private movieService: MovieService) {


    this.myForm = fb.group({
      'title': ['Podaj tytuł', Validators.compose([
        Validators.required, Validators.minLength(3),
      ])],
      'rating': ['Ocena filmu'],
      'productionYear': ['Rok produkcji']
    });

    this.title = this.myForm.controls['title'];
    this.rating = this.myForm.controls['rating'];
    this.productionyear = this.myForm.controls['productionYear'];
  


  }

  submit(value:any)
  {

    let movie = new Movie();
    movie.productionYear=this.productionyear.value;
    movie.rating=this.rating.value;
    movie.title=this.title.value;
    this.movieService.addMovie(movie);
  

  }

  ngOnInit() {
  }

}

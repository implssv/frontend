import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    title: 'Shawshank Redemption',
    rating : 10,
    productionYear: 1993
  };

  movies = MOVIES;
  selectedMovie: Movie;


  onSelect(movie: Movie)
  {
    this.selectedMovie=movie;
  }













    constructor() { }

  ngOnInit() {
  }

  

}

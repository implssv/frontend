import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MOVIES } from '../model/mock-movies';
import { MovieService } from '../service/movieService';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    title: 'Shawshank Redemption',
    rating: 10,
    productionYear: 1993
  };

  movies = MOVIES;
  selectedMovie: Movie;
  filteredMovies: Movie[];

  onFilteredMovies(movies: Movie[])
  {
    this.filteredMovies=movies;
  }



  onSelect(movie: Movie) {
    this.selectedMovie = movie;
  }


  constructor() {

    this.movies = this.filteredMovies = MOVIES;




  }

  ngOnInit() {
  }



}

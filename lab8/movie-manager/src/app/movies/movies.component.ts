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

    this.movies = this.filteredMovies = [

      { id : 1, title:'Jakis film', productionYear:2001, rating:9},
      { id : 2, title:'Film', productionYear:2008, rating:4},
      { id : 3, title:'Jakis', productionYear:1986, rating:9},
      { id : 4, title:'Lorem ipsum', productionYear:1996, rating:4},
      { id : 5, title:'Tour of heroes', productionYear:2156, rating:9},
      { id : 6, title:'Tour of movies', productionYear:2555, rating:7},
      { id : 7, title:'UG 2018', productionYear:2333, rating:1}

    ]




  }

  ngOnInit() {
  }



}

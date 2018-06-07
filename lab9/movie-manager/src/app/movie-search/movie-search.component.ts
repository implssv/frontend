import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../model/movie';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {



  @Output() filteredMovies = new EventEmitter<Movie[]>();
  @Input() movies : Movie[];

  searchControl : FormControl;

  constructor() {

    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(
      term => {
    
        this.informParent(this.movies.filter(p => p.title.includes(term)))
      }
    );


   }


   informParent(movies : Movie[])
   {

    this.filteredMovies.emit(movies);
   }

  ngOnInit() {
  }

}

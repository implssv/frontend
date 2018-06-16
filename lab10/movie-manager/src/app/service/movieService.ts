import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MOVIES } from "../model/mock-movies";
import { Injectable } from "@angular/core";
import { Movie } from "../model/movie";




@Injectable()
export class MovieService {


    constructor() {

    }

    getMovies(): Observable<Movie[]> {

        return of(MOVIES)
    }
    addMovie(movie:Movie)
    {
        let id = MOVIES[MOVIES.length-1].id+1;
        movie.id=id;
        MOVIES.push(movie);
    }
}
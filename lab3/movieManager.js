"use strict";
var lib = {};

function Movie(title, productionYear, rating) {
    this.title = title;
    this.productionYear = productionYear;
    this.rating = rating;

};





Movie.prototype = {

    getTitle: function () {
        return this.title;
    },
    getProductionYear: function () {
        return this.productionYear;
    },

    getRating: function () {

        return this.rating;
    },

  



};

function SpecialMovie(title, productionYear, rating, available)
{

    Movie.call(this, title, productionYear, rating);
    this.available = available;
};

SpecialMovie.prototype = Object.create(Movie.prototype);
SpecialMovie.prototype.constructor = Movie;




lib.movieManager = (function () {

   

    var movies = [new Movie("Test title", 1998, 9),new SpecialMovie("test", 1995, 9, true),new SpecialMovie("Another", 1995, 9, true)]
    
 
   
    var publicInterface =
        {

            getAllMovies: function () {

                return movies;

            },

            getMovieById: function (id) {


                return movies.filter((movie) => movie.id === id);

            },

            getMoviesByProductionYear: function (productionYear) {

                return movies.filter((movie) => movie.productionYear === productionYear);

            },

            getMoviesByRating: function (rating) {

                return movies.filter((movie) => movie.rating === rating);

            },

            getMoviesWithRatingGreaterThan: function (rating) {


                return movies.filter((movie) => movie.rating >= rating);

            }

        };


    return publicInterface;


}());




//console.log(movieManager.getAllMovies());

//console.log(movieManager.getMovieById(2));

//console.log(movieManager.getMoviesByProductionYear(1994));

 console.log(lib.movieManager.getMoviesByRating(9));

//console.log(lib.movieManager.getMoviesWithRatingGreaterThan(8));



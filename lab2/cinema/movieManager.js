"use strict";
var lib = {};


lib.movieManager = (function () {


    var movies = [


        {
            id: 1,
            title: "The Shawshank Redemption",
            productionYear: 1994,
            rating: 9

        },
        {
            id: 2,
            title: "Forrest Gump",
            productionYear: 1994,
            rating: 9

        },
        {
            id: 3,
            title: "Red Sparrow",
            productionYear: 2018,
            rating: 7

        },
        {
            id: 4,
            title: "The Silence of the Lambs",
            productionYear: 1991,
            rating: 8
        }];

       var publicInterface =
            {

                getAllMovies: function () {

                    return movies;

                },

                getMovieById: function (id) {


                 return movies.filter((movie) => movie.id===id);

                },

                getMoviesByProductionYear: function (productionYear) {

                   return movies.filter((movie) => movie.productionYear===productionYear);

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

// console.log(movieManager.getMoviesByRating(8));

//console.log(lib.movieManager.getMoviesWithRatingGreaterThan(8));



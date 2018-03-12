var movieManager = (function () {


    var movies = [


        {
            id: 1,
            title: 'The Shawshank Redemption',
            productionYear: 1994,
            rating: 9

        },
        {
            id: 2,
            title: 'Forrest Gump',
            productionYear: 1994,
            rating: 9

        },
        {
            id: 3,
            title: 'Red Sparrow',
            productionYear: 2018,
            rating: 7

        },
        {
            id: 4,
            title: 'The Silence of the Lambs',
            productionYear: 1991,
            rating: 8

        },




    ],
        interface =
            {

                getAllMovies: function () {

                    return movies;

                },

                getMovieById: function (id) {



                    for (var i = 0; i < movies.length; i++) {

                        if (movies[i].id === id)
                            return movies[i];
                    }

                },

                getMoviesByProductionYear: function (year) {

                    var filteredMovies = [];

                    movies.forEach(function (movie) {


                        if (movie.productionYear === year)
                            filteredMovies.push(movie);

                    })

                    return filteredMovies;

                },

                getMoviesByRating: function (rating) {

                    var filteredMovies = [];

                    movies.forEach(function (movie) {


                        if (movie.rating === rating)
                            filteredMovies.push(movie);

                    })

                    return filteredMovies;

                },

                getMoviesWithRatingGreaterThan: function (rating) {


                    var filteredMovies = [];

                    movies.forEach(function (movie) {


                        if (movie.rating >= rating)
                            filteredMovies.push(movie);

                    })

                    return filteredMovies;

                }






            }


    return interface;


})();




//console.log(movieManager.getAllMovies());

//console.log(movieManager.getMovieById(2));

//console.log(movieManager.getMoviesByProductionYear(1994));

// console.log(movieManager.getMoviesByRating(8));

console.log(movieManager.getMoviesWithRatingGreaterThan(8));



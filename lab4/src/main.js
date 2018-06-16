class Movie {

    constructor(title, productionYear, rating) {
        this.title = title;
        this.productionYear = productionYear;
        this.rating = rating;}
   
   printMovie()
   {
       console.log(this.title);
   }
    }

class SpecialMovie extends Movie
{

    constructor(title,productionYear,rating,description)
    {
        super(title,productionYear,rating);
        this.description=description;
    }


    printMovie()
    {
        console.log(this.title + ' ' + this.description);
    }


}
class MovieManager {



    constructor(movies)
    {
        this.movies = movies;
    }

}


    let a = new Movie("a", 1, "6");
    a.printMovie();
    let movie = new SpecialMovie("Tytul", 1995, 10, "Opis filmu");
    movie.printMovie();
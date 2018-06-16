class Movie {

    constructor(public title:string, public rating:number, public productionYear:number)
    {
        this.title=title;
        this.rating=rating;
        this.productionYear=productionYear;
    }

    toString() {
        return `Movie ${this.title} with rating: ${this.rating}`
    }
    getRating()
    {
        return this.rating;
    }
 
}

class SpecialMovie extends Movie
{
    constructor(public title:string, public rating:number, public productionYear:number, public description:string)
    {
       super(title,rating,productionYear);
       this.description = description;

    }

    toString() {
        return `Movie ${this.title} with rating: ${this.rating} and description ${this.description}`
    }

   

}



let movie = new Movie("Forrest Gump", 10,1991);
let specialMovie = new SpecialMovie("K-Pax", 9, 1990, "K-pax movie");


console.log(movie.toString());
console.log(specialMovie.toString())
console.log(specialMovie.getRating());    





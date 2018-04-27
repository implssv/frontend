"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function Movie(title, productionYear, rating) {
    _classCallCheck(this, Movie);

    this.title = title;
    this.productionYear = productionYear;
    this.rating = rating;
};

var a = new Movie("a", 1, "6");
console.log(a);

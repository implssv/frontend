"use strict";

function sayHello(person) {
  console.log('hello ' + person.name);
}

var anon = {
  name: 'Mateusz',
  yob: 1995,
  married: false
};
var anotherAnon = {
  name: 'Anon',
  yob: 1995,
  married: true
};
var myLIst = [anon, anotherAnon];
myLIst.forEach(sayHello);
var Kolory;

(function (Kolory) {
  Kolory[Kolory["Czerwony"] = 0] = "Czerwony";
  Kolory[Kolory["Bialy"] = 1] = "Bialy";
})(Kolory || (Kolory = {}));

;
console.log(Kolory.Czerwony);
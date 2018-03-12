var obj = {

name : "Mateusz",
surname : "Kacprzak"


};


console.log(obj.name);



// arrays

var array = [1,2,3];

console.log(typeof array);

//js jest funkcyjny
// funkcja jako zmienna
//fncja jako argument innej fncji
var add = function(a,b) {

  //  return a() +b;
  return a(b) + b;
};


//console.log(add(15,15));


console.log(typeof function(){})

//hoisting przenosi deklaracje do gory

console.log(add(multiply,4));


function multiply(a)
{
    return a*a;
}
//closure

var counter = function()
{
    //jak nie damy var to bedzie zmienna globalna
    var i = 0;
    return function()
    {

        return i++;
    }
}
//IEF
//}();


console.log("counter():");
counter();
counter();

console.log(counter());
var c = counter();

console.log("=================")
console.log(typeof c);
console.log(typeof counter)

console.log(counter);

console.log(c());
console.log(c())
console.log(counter());
me = this;
var imie = 5;
function z() {
    console.log(me)
}

// z();

z();


function Person(name) {
    this.name = name;
}


var person = 
{


    imie : "seba",

    sayHello: function()
    {
        return "hello" + this.imie;
    }
};
var a = new Person("aaa");
var b = Person("Bbb");

console.log(person.sayHello());
//console.log(b);








/////////////////


function duck()
{

    console.log("Jestem kaczka bo mowie " + this.kwakwa);

};


var kaczka = {

    kwakwa: "KWA, KWA"
};


duck.apply(kaczka);


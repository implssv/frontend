interface Person {

    name: string;
    yob: number;
    married: boolean;
}

function sayHello(person: Person) {

    console.log('hello ' + person.name);

}
let anon = {name:'Mateusz',yob: 1995, married: false};
let anotherAnon = {name: 'Anon', yob: 1995,  married: true};

let myLIst: Person[] = [anon, anotherAnon];
    
myLIst.forEach(sayHello);


enum Kolory {
    Czerwony, Bialy
};

console.log(Kolory.Czerwony);


/// TO co w lab 4 z es 6 to zrobic w ts + jakies api - crud interfejsy ,dziedziczenie
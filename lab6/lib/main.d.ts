interface Person {
    name: string;
    yob: number;
    married: boolean;
}
declare function sayHello(person: Person): void;
declare let anon: {
    name: string;
    yob: number;
    married: boolean;
};
declare let anotherAnon: {
    name: string;
    yob: number;
    married: boolean;
};
declare let myLIst: Person[];
declare enum Kolory {
    Czerwony = 0,
    Bialy = 1,
}

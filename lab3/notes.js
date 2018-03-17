function create(proto) {
    function F() { };
    F.prototype = proto;

    return new F();

};


var base = {

    x: 5,
    y: 7,

    getX: function () {
        return this.x;
    },
    getY: function () {

        return this.y;
    }
};


var someBase = create(base);

console.log(someBase.getX());
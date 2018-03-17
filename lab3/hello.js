var someObject = {};


function Shape(x, y) {

    this.x = x;
    this.y = y;
}

Shape.prototype.getX = function () {

    return this.x;
 };


Shape.prototype.message = function () {
    console.log("hello message");
};

Shape.prototype.move = function(deltaX, deltaY)
{
    this.x +=deltaX;
    this.y +=deltaY;
};

// alternatywnie mozna Shape.prototype = { getX: function(){} }
var concreteShape = new Shape(5, 5);

concreteShape.move(3,4);
console.log(concreteShape.getX());

concreteShape.message();


function Circle(x,y,r)
{
    Shape.call(this,x,y);
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;



Circle.prototype.area = function ()
{
    return Math.PI * this.r*this.r;
}

var concreteCircle = new Circle(20,30,2);
console.log(concreteCircle.area());
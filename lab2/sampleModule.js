var lib = {};

lib.module = function()
{

    var priv1 = 0,
    priv2 = "hello",
    myInterface =  {

        message: priv2 + "world",
        counter: function()
        {
            return ++priv1;
        },
        sayHello : function(name)
        {
            return "hello " + name;
        }
    };


    return myInterface;


}();


console.log(lib.module.sayHello("Mateusz"));
console.log(lib.module.priv1)
console.log(lib.module.counter());
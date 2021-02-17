

// Hoisting

const returnValue = myFirstFunction()

console.log(returnValue)


function myFirstFunction(){
    return "My first Greeting"
}

const myVariableFunction = function(){
    console.log("test");
};

myVariableFunction();

// Callback functions
function sayHiLater (anyFunctionReference){
    // simulate some code running
    // ... 5 sec later ...
    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
}
const sayHello = () => {
    console.log("Hello");
}



// call sayHiLater and pass a callback that says "Hi"
sayHiLater(sayHi);
sayHiLater(sayHello);

// Do the same but this time it should say "Hello"


function interact(genericInteraction, name){
    console.log(genericInteraction(name));
}

//call interact and let it interact with a person of name
// example: "poke " + name

const poke = (name) => {
    return "Poke " + name;
}

interact(poke, "Bob")

// call interact and in a single line make sure that the following is achieved
// example: "kick" + name

interact((name) => "Lick " + name, "Biden");

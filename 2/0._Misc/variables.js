"use strict";

// never EVER do this
//totalGlobalVariable = "My Total global variable";

//let someVarToDelete = "don't hurt me";

//let variableA; // A constant can't change, it's not supposed to change.
//let variableB; // A Let is for chan

//console.log(variableA + variableB); // Method, that takes one parameter. - Tries to add these two undefined creatures. Thinks its a number
//console.log(variableA, variableB); // Normal method, that takes two parameters

// type coercion. Tries to change the type, so it can work.

// always compare both value and types with === and !==

// allows typer coercion to happen..

// === hard equality check meaning that it checks if the type is the same.

// are objects truly immutable in Javascript? NO!

// Everytime you hop into a new scope with a function. It creates a new stack.


/*{
 //This is a new scope
 let scopedVariable = "abc";
 {
     scopedVariable = 123;
     // This is a nested scope that inherits from the previous scope
 }
 console.log(scopedVariable)
}*/


{
    let scopedVariable = "abc";{
        let scopedVariable = 123;
        console.log(scopedVariable);
    }
    console.log(scopedVariable);
}

function someApplication(){
    let myFavoriteNumber = 48;
    const theirFavorite = whatsYourFavoriteNumber();
    return (myFavoriteNumber, theirFavorite);
}

for (let i = 0; i < 6; i++){
    setTimeout(() => {
        //code here runs after 1 second
        console.log(i);
    }, 1500);
}
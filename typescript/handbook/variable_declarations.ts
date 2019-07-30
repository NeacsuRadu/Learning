// first example

function first_function_vd() {
    var a: number = 2;
    var ret = function() { return ++a; }
    a = 4;
    return ret;
}

var first_returned_function = first_function_vd();
console.log(first_returned_function()); // print: 5; returned function captures the a variable
console.log(first_returned_function()); // print: 6
console.log(first_returned_function()); // print: 7

/**
 * Scoping rules - var-scoping or function scoping 
 */

function shouldInitFunction(shouldInit: boolean): number {
    if (shouldInit) {
        var a: number = 10;
    }
    return a;
}

console.log(shouldInitFunction(false)); // print: undefined
console.log(shouldInitFunction(true)); // print: 10

// is a mistake to use var i in 2 nested for loops as iterators 

/**
 * Capturing quirks 
 */

/** for (var i = 0; i < 10; ++ i) {
        setTimeout(function() {console.log(i);}, 100 * i);
    } use let instead of var and it works */

for (var i = 0; i < 10; ++ i) {
    (function(x){ // you can also use i 
        setTimeout(function(){console.log(x);}, 100 * x);
    })(i);
} 

console.log(some_number); // print: undefined
var some_number = 10;
console.log(some_number); // print: 10

// console.log(some_let_number); - error: 
let some_let_number = 12;
console.log(some_let_number);


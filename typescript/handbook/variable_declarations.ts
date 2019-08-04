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

/**
 * destructuring - arrays  
 */

let destructArray = [1, 2];
let [firstDestr, secondDestr] = destructArray;
console.log(firstDestr, secondDestr);

// easy way to swap 2 variables
[firstDestr, secondDestr] = [secondDestr, firstDestr];
console.log(firstDestr, secondDestr);

let destructArraynd = [1, 2, 3, 4];
let [firstDestrnd, ... restDestr] = destructArraynd;
console.log(firstDestrnd, restDestr);

let [firstDestrd] = destructArraynd;
console.log(firstDestrd);

let [ , firstDestrth, ,secondDestrth] = destructArraynd;
console.log(firstDestrth, secondDestrth);

/**
 * destructuring - objects
 */

let objDes = {
    firstObj: 10,
    secondObj: 'da',
    thirdObj: true
};

let { firstObj, secondObj } = objDes; // { firstObj: a, secondObj: b } to create different names  
console.log(firstObj, secondObj);

let { firstObj: firstObjnd, ...restObj } = objDes;
console.log(firstObjnd, restObj);

/**
 * default values
 */
function defaultFunction(defaultParameter: {a: string, b?: number}): void {
    let {a, b = 10} = defaultParameter;
    console.log(a, b);
}

defaultFunction({a:'ceva', b:100});
defaultFunction({a:'ceva'});




/**
 * default and optional parameters 
 */

function firstFunction(param1: number, param2: string): void {
    console.log('First function', param1, param2);
}

function thirdFunction(param1: number, param2: string = 'par2'): void {
    console.log('Third function', param1, param2);
}

function fourthFunction(param1: number = 7, param2: string): void {
    console.log('Fourth function', param1, param2);
}

firstFunction(3, '2');
thirdFunction(3, 'da');
thirdFunction(3);
thirdFunction(3, undefined);
thirdFunction(3, 'nu');
fourthFunction(4, 'nu');
fourthFunction(undefined, 'nu');

/**
 * this, bind, call, apply
 * call - used for a function to set it's this parameter
 * bind - user to bind a function to a this 
 * apply - same as call, but you must pass arguments keyword  
 */
function thisFunction(name: string): void {
    console.log(this, name);
}

thisFunction('Radu'); // this object is set as windows / undefined on strict mode 
thisFunction.call('Stefan', 'Radu'); // this object is set as a string
thisFunction.call(3, 'Radu'); // this object is set as a number 

class thisClass {
    name: string = 'Stefan';

    showName(): void {
        console.log(this.name);
    }
}

new thisClass().showName(); // when using methods, this is set as the on which you call the function
new thisClass().showName.call({name: 'Radu'}); // but you can modify it aswell
let otherFunction = thisClass.prototype.showName;
otherFunction();
otherFunction.call({name: 'Name2'});

// here we make a function that has the same this always 
class Person {
    constructor(public name: string){}
}

function bindableFunction() {
    console.log(this.name);
}

function bindFunction(fnct, th) { // this aux function binds a fnct with no parameters th this param
    return function() {
        fnct.call(th);
    }
}

var p1 = new Person('Second name');

var boundFunction = bindFunction(bindableFunction, p1);
boundFunction();

var p2 = { name: 'Third name', f: boundFunction};
p2.f();

console.log('Calling function bound by function.prototype.bind');
var boundFunction2 = bindableFunction.bind(p1);
boundFunction2();

function ultraBindFunction(fnct, ths) {
    return function(...args) {
        fnct.apply(ths, args);
    }
}

console.log('Calling function bound by ultraBindFunction');
var boundFunction3 = ultraBindFunction(bindableFunction, p2);

function f(greeting: string) {
    console.log(`${this.name} says ${greeting}`);
}

var boundFunction4 = ultraBindFunction(f, p2);

boundFunction3();
boundFunction4('hi');
/**
 * unknown number of parameters - rest parameters 
 */
function restFunction(p1: string, ...rest: string[]): void {
    console.log(rest);
}

restFunction('a', 'b', 'd', 'e');

/**
 * arrow functions - capture the this when it was created 
 */
class ArrowSample {
    constructor(public name: string) {}

    getFunction(): () => void {
        return function(): void {
            console.log(this.name);
        }
    }
}

let f1: () => void = new ArrowSample('da').getFunction();

class ArrowSample2 {
    constructor(public name: string) {}

    getFunction(): () => void {
        return () => {
            console.log(this.name);
        }
    }
}

let f2: () => void = new ArrowSample2('nu').getFunction();

f1();
f2();

/**
 * pass lambda that need no this 
 */

/**
 * function overload 
 */
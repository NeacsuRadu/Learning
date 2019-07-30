/*
 * boolean
 */ 

let isValid: boolean = false;
let isReal: boolean = true;
// let isTrue: boolean = 1; - error: Type '1' is not assignable to type 'boolean'
console.log(isValid);
console.log(isReal);


/*
 * number - all numbers in typescript are floating point values
 */

let decimal: number = 5;
let hex: number = 0xf2;
let oct: number = 0o17;
let bin: number = 0b100;

console.log(decimal, hex, oct, bin);

/*
 * string 
 */

let fullName: string = 'Radu Neacsu';
let message: string = `My name is ${fullName}

I am ${decimal} years old`;

console.log(message);

/*
 * array - two ways of declaring an array
 */

let nrs: number[] = [1, 2, 3];
let names: Array<string> = ['Radu', 'Stefan'];

console.log(nrs);
console.log(names);

/*
 * tuple 
 */

let tp: [number, string]; 
tp = [32, 'Radu'];
// tp = ['Radu', 32]; error: type 'string' is not assignable to type 'number'

console.log(tp);
console.log(tp[1].length);
// console.log(tp[0].length); - error: property 'length' does not exist on type 'number'
// console.log(tp[3].length); - error: Type type '[str, number]' of length '2' has no element at index '3'

let tuples: [string, number][] = [['Radu', 5], ['Stefan', 2]];
console.log(tuples);

/*
 * enum
 */

enum Color {
    Red = 4,
    Green = 3,
    Blue
};

let cr: Color = Color.Red;
let cg: Color = Color.Green;
let cb: Color = Color.Blue;
console.log(cr, cg, cb);

console.log(Color[3]);
console.log(Color[4]); // Blue
console.log(Color[2]); // undefined

/*
 * any - helps to opt-out type checking on dynamic variables 
 *     - helpful when working with existing javascript code 
 */

let notSure: any = 2;
console.log(notSure);
notSure = 'notSure';
console.log(notSure);
notSure = true;
console.log(notSure);

let l: any[] = [1, true, 'free'];
l[1] = 100;
console.log(l);

/*
 * void - declare functions that return nothing, can assign only null and undefined
 */

function void_function(): void {
    console.log('This function returns nothing');
}

let unusable: void = undefined;
void_function();

/*
 * null and undefined - have their own types: null and undefined
 *                    - subtypes of all other types 
 *                    - --strictNullChecks, only assignable to any and their types, except undefined to void 
 */

let nu: null = null;
let un: undefined = undefined;
let numb: number = null;
let strnull: string = undefined;
console.log(nu, un, numb);

/*
 * never - used for functions that never return, throw exceptions
 *       - nothing can be assinged to never, except never 
 *       - never can be assigned to everything  
 */

/* 
 * function never_function(): never {
 *    console.log('this is a never_function');
 * } - error: returning never cannot have reachable endpoint 
 */ 

function never_function(): never {
    throw 3;
}

try { 
    never_function(); 
}
catch (e) {
    console.log(e); 
}

/*
 * object - non-primitive type - boolean, number, string, null, undefined, symbol
 */

function object_function(o: object | null): void {}

object_function({a: 3});
object_function(null);
// object_function(3); - error
// object_function('str'); - error 
object_function(undefined);

/*
 * type assertions - trust me, i know what i'm doing
 */

 let someValue: any = 'this is a string';
 let first_cast: number = (<string>someValue).length;
 let second_cast: number = (someValue as string).length; // jsx is working just with this
 let third: number = someValue.length;
 console.log(first_cast, second_cast, third);



function firstInterfaceFunction(param: {label: string}) {
    console.log(param.label);
};

let ob1 = {
    label: 'str',
    count: 10  
};

firstInterfaceFunction(ob1); // the type checker 

interface FirstInterface {
    label: string
};

function secondInterfaceFunction(param: FirstInterface) {
    console.log(param.label);
}

let ob2 = {
    label: 'this is a label',
    valid: true
};

secondInterfaceFunction(ob2);

/**
 * interfaces with optional properties 
 */

interface SquareConfig {
    color?: string,
    width?: number
};

function getSquareData(config: SquareConfig): {color: string, area: number} {
    let newSquare = {
        color: 'red',
        area: 100
    };

    if (config.color) { // Property 'colr' does not exist on type 'SquareConfig'. Did you mean 'color'? if we misspel the property name 
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width ** 2;
    }

    return newSquare;
}

console.log(getSquareData({color: 'green'}));

/**
 * readonly properties - readonly is for properties, const is for variables
 */

interface ReadonlyPoint {
    readonly x: number;
    readonly y: number; // cannot be modified, only initialized

    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // } only point literals 
};

let p: ReadonlyPoint = {x: 10, y: 11};
console.log(p);
// p.x = 15; error: Cannot assign to 'x' because it is a read-only property

interface Point {
    x: number;
    y: number;
};

interface PointWrapper {
    readonly p: Point;
};

let p2: PointWrapper = {
    p: {
        x: 10,
        y: 15
    }
};
console.log(p2);
p2.p.x = 9;
p2.p.y = 14;
console.log(p2);

/**
 * function types interfaces 
 */

interface BinaryNumberFunction {
    (first: number, second: number): number
};

let sum : BinaryNumberFunction = function (first: number, second: number): number {
    return first + second;
};

let diff : BinaryNumberFunction = function (f, s) {
    return f - s;
}

// let mul : BinaryNumberFunction = function (l, r) {
//     return l == r;
// }

/**
 * indexable types
 */


interface StringArray {
    [index: number] : string;
}

let sa : StringArray = ['Alice', 'Bob'];
console.log(sa[1]);
sa[0] = 'Aliceee';
console.log(sa[0]);

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let sa2: ReadonlyStringArray = ['Al', 'Bb'];
console.log(sa2[1]);
// sa2[0] = 'Mar'; error: Index signature in type 'ReadonlyStringArray' only permits reading.

interface NumberOrStringDict {
    [index: string] : number | string;
    name: string;
    age: number;
}

let nosd: NumberOrStringDict = { name: 'ceva', age: 30 };
console.log(nosd);
nosd['ceva'] = 'da';
nosd['altceva'] = 2;
console.log(nosd);

class Animal {
    name: string;
};

class Dog extends Animal {
    breed: string;
}

// interface NotOk { error: Numeric index type 'Animal' is not assignable to string index type 'Dog'
//     [index: number]: Animal;
//     [index: string]: Dog;
// };

interface Ok {
    [index: number]: Dog;
    [index: string]: Animal;
}

let okDict = {};
console.log(okDict);
okDict['da'] = {name:'Mirel'};
okDict[2] = {name: 'Gigi', breed: 'Om'};
console.log(okDict);

/**
 * implementing an interface 
 */

 
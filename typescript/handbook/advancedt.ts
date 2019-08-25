/**
 * polymorphic this types - this is converted to object type 
 */
console.log('POLYMORPHIC THIS TYPES');

class BasicCalculator {
    protected value = 0;

    add(x: number): this {
        this.value += x;
        return this;
    }

    get(): number {
        return this.value;
    }
}

let bc: BasicCalculator = new BasicCalculator;
console.log(bc.add(4).get());

class AdvancedCalculator extends BasicCalculator {
    multiply(x: number): this {
        this.value *= x;
        return this;
    }
}

let ac: AdvancedCalculator = new AdvancedCalculator;
console.log(ac.add(3).multiply(4).get());

/**
 * intersection types 
 */
console.log('INTERSECTION TYPES');

class Intersection1 {
    constructor(public prop1: string) {};
}

class Intersection2 {
    constructor(public prop2: number) {}
}

type intersectionType = Intersection1 & Intersection2;

function intersectionFunction(param: intersectionType): void {
    console.log(param.prop1);
    console.log(param.prop2);
}

intersectionFunction({prop1: "da", prop2: 7});

/**
 * union types
 */
console.log('UNION TYPES');

/**
 * str - addPadding function adds padding to str parameter based on pad parameter
 * pad - string => adds that string to the left of str
 * pad - number => adds that number of spaces to the left of str
 */
function addPadding(str: string, pad: string | number): string {
    if (typeof pad === "string") {
        return pad + str;
    }

    if (typeof pad === "number") {
        return Array(pad + 1).join(" ") + str;
    }
}

console.log(addPadding('string', 'pad'));
console.log(addPadding('string', 6));
// console.log(addPadding('string', false)); - error : Argument of type 'false' is not assignable to parameter of type 'string | number'


interface Fish {
    name: string;
    swim(): void;
}

interface Bird {
    name: string;
    fly(): void;
}

function getPet(x: number): Fish | Bird {
    if (x % 2 == 0) {
        return {
            name: "fishy",
            swim: function(): void { console.log("fish fish"); }
        };
    } else {
        return {
            name: "birdie",
            fly: function(): void { console.log("fffff"); }
        }
    }
}

let pet: Fish | Bird = getPet(2);
console.log(pet.name);
// pet.swim(); - error: Property does not exist on type 
// pet.fly(); - error: Property does not exist on type

/**
 * user defined type-guards 
 */

function isFish(par: Fish | Bird): par is Fish {
    return (par as Fish).swim !== undefined;
}

function isBird(par: Fish | Bird): par is Bird {
    return (par as Bird).fly !== undefined;
}

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

/**
 * nullable types
 * -> undefined and null can be assigned to anynthing (except strictNullCheck compiler option) 
 */

let num: number  = 2;
// num = null; - error: null is not assignable to type number 
// num = undefined; - error: undefined is not assignabled to type number 

/**
 * string literal types 
 */

type StringType = "t1" | "t2";
function stringTypeFunction(par: StringType): void {
    console.log(par);
}

stringTypeFunction("t1");
stringTypeFunction("t2");
// stringTypeFunction("t3"); - error: is not assignable to param of type StringType

/**
 * number literal type 
 */

function numberTypeFunction(): 1 | 2 {
    // return 3; - error: 3 is not assignable to 1 | 2
    return 1;
}

/**
 * index types 
 */

function pluck<T, K extends keyof T>(o: T, props: K[]): T[K][] {
    return props.map(x => o[x]);
}

interface Car {
    model: string;
    manufacturer: string;
    year: number;
}

let taxi = {
    model: 'x5',
    manufacturer: 'bmw',
    year: 2000
};

console.log(pluck(taxi, ['model', 'manufacturer']));
console.log(pluck(taxi, ['model', 'year']));
// console.log(pluck(taxi, ['uk', 'model']));

/**
 * mapping types
 */

type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
}

type OptionalType<T> = {
    [K in keyof T]?: T[K];
}

type ReadonlyCar = ReadonlyType<Car>;
var cc: ReadonlyCar = { 
    model: 'x6',
    manufacturer: 'bmw',
    year: 2000
};

// cc.model = "x5"; - error

type ReadonlyOnlyWithOption<T> = {
    readonly [K in keyof T]: T[K] | null;
} & { option: boolean };

type ReadonlyCarWithOption = ReadonlyOnlyWithOption<Car>;
var cc2: ReadonlyCarWithOption = {
    model: 'x6',
    manufacturer: null,
    year: 2002,
    option: false
}

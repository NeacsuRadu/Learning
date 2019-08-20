function identity<T>(arg: T): T {
    // console.log(arg.length); - error: Property 'length' does not exist on type 'T'
    console.log(typeof arg);
    return arg;
}

let a = identity(3);
let b = identity<number>(5);
console.log(a, b);

function identity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function identity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    console.log(typeof arg);
    return arg;
}

let c = identity2([1, 2, 3, 4]);
let d = identity3(['a', 'c', 'd']);
console.log(c, d);

/**
 * generic interfaces 
 */

interface InterfaceGenericFn {
    <T>(arg: T): T;
}

let f1: InterfaceGenericFn = identity;

interface GenericInterfaceFn<T> {
    (arg: T): T
}

// let f2: GenericInterfaceFn = identity; - error: GenericInterfaceFn requires one argument
let f2: GenericInterfaceFn<number> = identity;

f1<string>('da');
// f2('da'); - error: Argument of type '"da"' is not assignable to parameter of type 'number'
f2(40);

/**
 * Generic constraints 
 */

interface LengthWise {
    length: number;
}

function identity4<T extends LengthWise>(arg: T): T {
    console.log(typeof arg, arg.length);
    return arg;
}

identity4('string');
identity4([1, 3, 4]);
// identity4(3); - error: Argument of type '3' is not assignable to parameter of type 'LengthWise'
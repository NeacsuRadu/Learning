class AnimalClass {
    name: String;

    constructor(name:String) {
        this.name = name;
    };

    move(meters: Number = 0) {
        console.log(`Moving ${meters} meters`);
    };
};

class Snake extends AnimalClass {
    constructor(name: String) {
        super(name);
    };

    move(meters: Number = 10) {
        console.log(`Sssss`);
        super.move(meters);
    };
};

class Horse extends AnimalClass {
    constructor(name: String) {
        super(name);
    };

    move(meters: Number = 15) {
        console.log('Prrr');
        super.move(meters);
    };
};

let a1: AnimalClass = new Horse('h');
let a2: AnimalClass = new Snake('s');
a1.move();
a2.move();
let a3: Snake = new Snake('ss');
let a4: Horse = new Horse('hh');
a3.move();
a4.move();

/**
 * class compatibility - by default members are public 
 */

class base {
    private name: String;
    constructor(name: String) {
        this.name = name;
    };
};

class d1 extends base {
    constructor() {
        super('name1');
    };
};

class d2 extends base {
    constructor() {
        super('name2');
    };
};

class base2 {
    private name: String;
    constructor() {
        this.name = 'nname';
    };
};

let o1 = new base('nnn');
let o2 = new d1();
let o3 = new d2();
let o4 = new base2();

o2 = o3; // compabile 
o2 = o1; // compabile 
// o2 = o4; - error: Type 'base2' is not assignable to type 'd1'. Types have separate declarations of a private property 'name' 

/**
 * private protected qualifier 
 */

class PrivateClass {
    private name: String;
    
    constructor() {
        this.name = 'nnna';
    };

    show(): void {
        console.log(`Name: ${this.name}`);
    };
};

class DerivedClass extends PrivateClass {
    constructor() {
        super();
    }
}

let o5: DerivedClass = new DerivedClass();
o5.show();
// o5.name; error - Property 'name' is private and only accessible within class 'PrivateClass'

class ProtectedClass {
    protected name: String;
    protected constructor() {
        this.name = 'nname 5';
    }
}

class DerivedClass2 extends ProtectedClass {
    constructor() {
        super();
    }

    show(): void {
        console.log(`name: ${this.name}`);
    }
}

let o6: DerivedClass2 = new DerivedClass2();
o6.show();
// let o7: ProtectedClass = new ProtectedClass(); error - Constructor of class 'ProtectedClass' is protected and only accessible within the class declaration.

/**
 * readonly modifier - in constructor or in class deff (if both, the value is the one assigned in constructor)
 */

class ReadonlyClass {
    readonly age: Number = 8;
    constructor(readonly name: String, private readonly height: Number) {
        this.age = 16;
    }

    show(): Number {
        return this.height;
    }
}

let o7: ReadonlyClass = new ReadonlyClass('Rdddu', 12);
console.log(o7.age, o7.name, o7.show());

/**
 * accessors - _odd is called an accessor
 *           - if it has only the getter, _odd is readonly 
 */

class OddNumber {
    private _odd: number;

    get odd(): number {
        return this._odd;
    }

    set odd(numb: number) {
        if (numb % 2 == 0) {
            throw new Error('Number is not odd');
        }
        
        this._odd = numb;
    }
}

let o8: OddNumber = new OddNumber;

try {
    o8.odd = 17;
    console.log(o8.odd);
    // o8.odd = 18;
    // console.log(o8.odd); // throws exception
}
catch (e) {
    console.log(e);
}

/**
 * abstract classes 
 */

abstract class AbsClass1 {
    talk(): void {
        console.log('talking');
    }

    abstract move(): void;
}

// let o9: AbsClass1 = new AbsClass1; - error

class ExtClass1 extends AbsClass1 {
    move(): number {
        console.log('moving');
        return 9;
    }
 }

let o9: AbsClass1 = new ExtClass1;
o9.talk();
console.log(o9.move());
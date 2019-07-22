### Arithmetic Operators 

* `**` is used for power: `2 ** 3 = 5`

### Functions 

* declared using `function` keyword, creates a **Function object** having all the properties of **Function objects**
* by default returns `undefined`
* a **function expression** is very similar to a **function statement(function declaration)**

#### Unnamed Function Expression
```
var square = function(x) { 
    return x * x; 
};

console.log(square(4));
```

#### Names Function Expressions
```
var math = {
        // Declare the factorial property
        factorial: 
            // Declare the function as the property's value
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                // Returns 1 if n <= 1
                return 1;
            }
};

var fib = function fibonacci (n) {
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    return 1;
}

console.log(math.factorial(7));
console.log(fib(8));
```

### Let and Const - Variable declarations keywords

* `let` and `const` declares a variable similar to c 
* using `var` makes the variable visibile for inner scopes, even if you redeclare it using `var` 


### If-Else Conditional Statements 

* `==` and `!=` compares the operands (converting them if they are not the same type) by comparing their values (if they are primitive types) or their internal references
* `===` and `!==` compares the operands like the above operators, but return false if they are not the same type
* falsly values (values that evaluate to false): `false`, `undefined`, `null`, `0`, `NaN`, `""` (the empty string)

### Switch Conditional Statements

* the matching is made using **strict comparison** (`===`)

### Loops 

* `for`, `while` and `do while` are the same as the ones uses in c++ 
* `for-in` iterates in an arbitrary order over the name of each enumerable property of the object 
```
class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
};

var monster = new Monster('Minotaur', 'Labyrinth', 'Bull head, man body.');
for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }

/*
 * Prints 
 * name: Minotaur
 * home: Labyrinth
 * description: Bull head, man body.
 */
```
* `for-of` iterates over iterable objects such as Array, Map, Set, String etc
```
let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}

/*
 * Prints:
 * [ 'firstName', 'Julia' ]
 * [ 'lastName', 'Roberts' ]
 * [ 'dateOfBirth', 'October 28, 1967' ]
 * ... 
 * firstName: Julia
 * lastName: Roberts
 * dateOfBirth: October 28, 1967
 * ...
 */
```

### Arrays 
* Useful methods: `forEach`, `push`, `pop`, `shift`, `unshift`, `indexOf`, `splice`, `slice`, `sort`, `for-of`
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



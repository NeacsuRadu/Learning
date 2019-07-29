function greeter(person: String) {
    return 'Hello, ' + person;
}

 let user = 'Jane user';
// let user = [0, 1, 2]; compile error : Argument of type 'number[]' is not assignable to parameter of type 'String'

document.body.textContent = greeter(user);
//document.body.textContent = greeter(); compile error: Expected 1 arguments, but got 0

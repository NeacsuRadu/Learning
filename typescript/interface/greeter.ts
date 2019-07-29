interface Person {
    firstName : string;
    lastName : string;
};

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'user' }; 
// let user = { firstN: 'Jane', lastNme: 'user' }; compile error: Argument of type '{ firstN: string; lastNme: string; }' is not assignable to parameter of type 'Person' 

document.body.textContent = greeter(user);
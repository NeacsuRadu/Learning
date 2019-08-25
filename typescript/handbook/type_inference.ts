// class Animal {}
// class Dog extends Animal {}
// class Cat extends Animal {}
// class Pig extends Animal {}

// let zoo: Animal[] = [new Dog, new Cat];
// let ob = [1, 2, 30];
// //zoo.push(new Pig);
// console.log(zoo)

"use strict"
function f1(callback: (number) => void): void {
    callback(10);
}

f1(() => { console.log('callback called')});
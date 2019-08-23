function getSomeValue() {
    return 6;
}

enum FirstEnum {
    A,
    B = getSomeValue(),
    C = A
}

// interface EnumInterface {
//     mem: FirstEnum.C; - error: Enum type 'FirstEnum' has members with initializers that are not literals.
// }

enum SecondEnum {
    A, B = 5, C 
}

interface EnumInterface {
    mem: SecondEnum.B
}

// let ob1: EnumInterface = {
//     mem: SecondEnum.A - error: Type 'SecondEnum.A' is not assignable to type 'SecondEnum.B'
// }

let ob2: EnumInterface = {
    mem: 5
}

console.log(SecondEnum[5]);
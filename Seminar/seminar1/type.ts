let isDone: boolean = true;

const str: string = 'hello';

let num: number = 2;

// const sum: number = 'sum number';

// Type 'string' is not assignable to type 'number'.


let array: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value' },
    { itme: 'value2' }
];

// objArr.map(obj => {
//     console.log(`item: ${obj.item1}`)
// })
// objArr.map((obj: any) => {
//     console.log(`item: ${obj.item1}`);
// })

/**
 * object vs Object
 */

const foo = (obj: object): void => {
    console.log(obj);
};

const boo = (obj: Object): void => {
    console.log(obj);
}

// foo('hi');
// Argument of type 'string' is not assignable to parameter of type 'object'.

boo('hi');


/**
 * function return type
 */

function foo2(a: number, b: number): number {
    return a + b;
}

const boo2 = (a: number, b: number): number => {
    return a + b;
}

const noReturn = (): void => {
    console.log('hihi');
}

// foo2('hello', 2); 
// Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * null , undefined
 */

let a: null = null;

// let x: null = 2; 
// Type '2' is not assignable to type 'null'

let b: undefined = undefined;

// let y: undefined = null;
// Type 'null' is not assignable to type 'undefined'.

console.log(b);

/**
 * Type assertions
 */

// angle-bracket
let myName: any = '채정아';
let myNameLength: number = (<string>myName).length;

// as 
let yourName: any = "강민재";
let yourNameLength: number = (yourName as string).length;

/**
 * any
 */

const unknown: any = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29]
}

console.log(unknown);


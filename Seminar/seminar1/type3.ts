let name: string = '채정아';
console.log(name);

let grade: number = 4;

let isDeleted: boolean = false;

const sum = (x: number, y: number): number => {
    return x * y;
}

// const ages: number[] = [1, 2, 3, 4, 5]; 
const ages: Array<number> = [1, 2, 3, 4];

// const strArray: string[] = ["hi", "hello"];
const strArray: Array<string> = ["hi", "heel"];

// const obj1: object = {
    
// }

// const obj2: Object ={

// }

const f1  = (obj: object): void => {
    console.log(obj);
}

const f2 = (obj: Object): void => {
    console.log(obj);
}

f1([1, 2, 3, 4]);
// f1('hihi');

const div = (x: number ,y: number): string[] => {
    return ['hello']
}


let p: null = null;

let u: undefined = undefined;

// angle-bracket 타입 단언
let name3: any = '채정아'; // any 마법 (아무 타입이나 가능)
let name3Length: number = (<string>name3).length; 
console.log(name3Length);

// as
let name4: any = '서버';
let name4Length: number = (name4 as string).length;
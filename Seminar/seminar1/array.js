let arr = [1, 'item', true];
let arr2 = Array(4, null, { item: 'item' });

arr.map(item => console.log(item));
arr2.map(item => console.log(item));

// 함수 선언식
function sum(a, b) {
    return a + b;
}

// 함수 표현식
let sum2 = (a, b) => {
    return a + b;
}

console.log(typeof arr)

console.log(typeof 'hi')


let numArr = [1, 2, 3];
const newArr = numArr.map(x => x * 2);

console.log(newArr)
// 2 4 6




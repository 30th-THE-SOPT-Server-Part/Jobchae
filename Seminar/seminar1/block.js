// if (true) {
//     var x = 'var';
// }
// console.log(`var: ${x}`);

// if (true) {
//     let y = 'let';
// }
// console.log(`let: ${y}`);

function foo () {
    if (true) {
        var variable = 'hello';
        console.log('if block - ', variable);
    }
    console.log('function block - ', variable);
}

console.log('global - ', variable);
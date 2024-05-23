// for (let i=0; i<10; i++) {
//     console.log( i );
// }

//console.log(i); // ReferenceError01

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}, 1000)

console.log('====================');

setTimeout(() => {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}, 2000)


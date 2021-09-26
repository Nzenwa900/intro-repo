
// // while loop //

// let num = 0;
// while (num < 10){
//     num++;
// }
// console.log(num);

// // For loop



// for(let i = 1; i<10; i++ ) {
//     console.log('Hello')
// }

let array1 = [];
for(let i = 0; i<10; i++) {
    array1.unshift(i);
    
}

console.log(array1);

// let array2 = [...array1];
// console.log(array2);


let array2=[1,2,3,4,5,6,7,8,9];

for(let i = 0; i < 5; i++){
    array2.shift();
}

console.log(array2);

for (const i of array2) {
    console.log(`this is me ${i}`);   
    
}
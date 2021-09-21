
    var firstName = "chidozie";
    console.log(firstName);

    var lastName = "Nzenwa";
    var fullName = firstName + lastName ;

    console.log(fullName);

    console.log(5%2);


    console.log(5 ** 2)

    var cyrilName = 1;

    console.log(cyrilName);


    cyrilName = ++cyrilName;
    console.log(cyrilName);

    var danName = 5;

    danName = ++danName;
    console.log(danName);


    // if condition

    var dozie = 67;

    if (dozie == '5') {
        console.log('Yipee!')
    }
    
    // else condition

    if (dozie == 6) {
        console.log('Dozie is 6')
    } else {
        console.log('Dozie is not 6')
    }

    // else if


    if (dozie == 67) {
        console.log('Dozie is 67')
    } else if (dozie == 5) {
        console.log('Dozie is 5')
    } else {
        console.log('Dozie is a young lad')
    }

// switch condition


// functions


function numAdd(num1, num2, num3) {
    console.log(num1 + num2 + num3)
    newThing = multiply(10,400);
    console.log(newThing);
    
}

numAdd(1, 2, 3);


function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2,5));    
// console.log(multValue);


// var anotherValue = 2 * 5;

// var newThing = multValue * anotherValue;
// console.log(newThing);

function bigBoy(age,money) {
    if (age > 10 || money > 1000000) {
        return 'Big boy';
    } else {
        return 'Small boy'
    }
}

console.log(bigBoy(9,20));
console.log(bigBoy(8,200));

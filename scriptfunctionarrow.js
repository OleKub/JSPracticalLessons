"use strict"

// function showFirstMessagev() {
//     console.log("Hellow World!");
// }

// showFirstMessagev();

// const usdCurr = 28;
// const eurCurr = 32;
// let amount = 500;

// function convert(amount, curr) {
//     console.log(amount * curr);
// }

// convert(amount, usdCurr);
// convert(amount, eurCurr);

// const test = "12.4";
// console.log(Math.round(test));

function sayHello(name) {
    return `Hi, ${name}!`;
}

sayHello('Alex');


function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult (num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i == times) {
            str+= `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}getMathResult(10, 5);
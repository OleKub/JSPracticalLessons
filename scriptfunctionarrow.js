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

// function sayHello(name) {
//     return `Hi, ${name}!`;
// }

// sayHello('Alex');


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// function getMathResult (num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i == times) {
//             str+= `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }getMathResult(10, 5);

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0;
         area = 0;

    volume = length * length * length;
    area = 6 * length * length;

    return `Объем куба: ${volume}, Площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. ПРоверте правильность введенного номера места"
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}

getCoupeNumber(33);
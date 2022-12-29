"use strics";

// let a
// console.log(a)
// a = true 
// console.log(a)

// const myCity = {
//     city: 'Kyiv',
//     popular: true,
//     country: 'Ukraine'
// }
// // console.log(myCity.city)
// // console.log(myCity)
// // myCity.city = 'Lviv'
// // console.log(myCity)
// myCity.region = 'Lviv region'
// console.log(myCity)
// delete myCity.city
// console.log(myCity)

// const myCity = {
//     city: 'Kyiv'
// }

// myCity['popular'] = true
// console.log(myCity)
// const countryPropertyName = 'country'
// myCity[countryPropertyName] = 'Ukraine'
// console.log(myCity)



// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular: true,
//         country: 'USA'
//     }
// }
// console.log(myCity.info['isPopular'])
// delete myCity.info.isPopular
// console.log(myCity)


// const uName = 'Oleksandr'
// const postsQty = 23

// const userProfile = {
//     uName,
//     postsQty,
//     hasSiqnedAgreement: false
// }
// console.log(userProfile)

// const uName = 'Oleksandr';
// const uAdress = {
//     uCity: 'Kyiv',
//     uCountry: 'Ukraine'
// };

// const greeting = `Hi, my name is ${uName}, i live in ${uAdress.uCity}.`;

// console.log(greeting);

// function multByFactor(value, multiplier = 1) {
//     return value * multiplier;
// }

// console.log(multByFactor(10,2));

// const multByFactor = (value, multiplier = 1) => {
//     return value * multiplier;
// };
// console.log(multByFactor(10,2));

const fnWithError = () => {
    throw new Error('Some error');
};
try {
    fnWithError();
} catch (error) {
    console.log(error.message);
}

console.log('Continue...');
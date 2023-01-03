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

// const fnWithError = () => {
//     throw new Error('Some error');
// };
// try {
//     fnWithError();
// } catch (error) {
//     console.log(error.message);
// }

// console.log('Continue...');

// const myArray = [1,2,3]
// console.log(myArray)

// myArray.forEach(el => console.log(el * 2))

// console.log(myArray)

// const myArray =[1,2,3]
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)

// console.log(newArray)
// console.log(myArray)

// const age = 33;

// if (age > 18) {
//     console.log('Is adult')
// } else if (age >= 12) {
//     console.log('Is teenager')
// } else {
//     console.log('is child')
// }

// const month = 2

// switch (month) {
//     case 12:
//         console.log('December')
//         break
//     case 1:
//         console.log('January')
//         break  
//     case 2:
//         console.log('February')
//         break       
//     default:
//         console.log('This is not a winter month')       
// }

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty +=1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

Comment.mergeCommnts('First comment.', 'Second comment.')
const firstComment = new Comment('First Coment')
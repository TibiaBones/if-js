// let user = 'John Doe';
// console.log('6.2', user);
//
// const student = 'Konstantsin';
// console.log('6.3', student);
//
// user = student;
// // Konstantsin
// console.log('6.7', user);
//
// let test = 1;
// test++;
// test += 1;
// // 3
// console.log('7.5', test);
//
// test--;
// // 2
// console.log('7.7', test);
//
// test = !!test;
// // true
// console.log('7.10', test);
//
// let part8 = [2, 3, 5, 8];
// let value = 1;
// for (let i = 0; i < part8.length; i++) {
//     value *= part8[i];
// }
// console.log('8', value);
//
// let part9 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < part9.length; i++) {
//     value = part9[i];
//     if (value > 5 && value < 10) {
//         console.log('9', value);
//     }
// }
//
// let part10 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < part10.length; i++) {
//     value = part10[i];
//     if (value % 2 === 0 && value !== 0) {
//         console.log('10', value);
//     }
// }
//
// // lesson 3
//
// function palindrome(str) {
//     str = str.toLowerCase().replace(/\s/g, '').split(',').join('');
//     return str === str.split("").reverse().join("");
// }
//
// console.log('1', palindrome('Тринитраплазмаполиуритан'));
// console.log('1', palindrome('Утроба, к аборту'));
//
//
// function checkMin(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
//
// function checkMinSecVer(a, b) {
//     return a < b ? a : b;
// }
//
//
// function checkMax(a, y) {
//     if (a > y) {
//         return a;
//     } else {
//         return y;
//     }
// }
//
// function checkMaxSecVer(a, y) {
//     return a > y ? a : y;
// }
//
// console.log('2.1', checkMin(2, -38));
// console.log('2.2', checkMax(56, 7));
// console.log('2.3', checkMinSecVer(2, 87));
// console.log('2.3', checkMaxSecVer(65, 8));
//
//
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = getRandom(0, 101);
// }
// arr.length = 10
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toString().split('0').join('zero');
// }
//
// console.log('3', arr);
//
// // lesson 4
//
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const changingClass1 = document.getElementById('text1');
// const changingClass2 = document.getElementById('text2');
// const changingClass3 = document.getElementById('text3');
// console.log(changingClass1);
//
// const colorCh = () => {
//     let c = 0;
//     return function (event) {
//         event.target.style.color = colors[c];
//         c++;
//         if (c >= colors.length) {
//             c = 0;
//         }
//     }
// };
//
//
// changingClass1.addEventListener('click', colorCh());
//
//
// changingClass2.addEventListener('click', colorCh());
//
//
// changingClass3.addEventListener('click', colorCh());
//
//
// //lesson 5
//
// let date = '2020-11-26';
// date = date.split('-').reverse().join(".");
// console.log(date);
//
// const data = [
//     {
//         country: 'Russia',
//         city: 'Saint Petersburg',
//         hotel: 'Hotel Leopold',
//     },
//     {
//         country: 'Spain',
//         city: 'Santa Cruz de Tenerife',
//         hotel: 'Apartment Sunshine',
//     },
//     {
//         country: 'Slowakia',
//         city: 'Vysokie Tatry',
//         hotel: 'Villa Kunerad',
//     },
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hostel Friendship',
//     },
//     {
//         country: 'Indonesia',
//         city: 'Bali',
//         hotel: 'Ubud Bali Resort&SPA',
//     },
//     {
//         country: 'Netherlands',
//         city: 'Rotterdam',
//         hotel: 'King Kong Hostel',
//     },
//     {
//         country: 'Marocco',
//         city: 'Ourika',
//         hotel: 'Rokoko Hotel',
//     },
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hotel Rehberge Berlin Mitte',
//     },
// ];
//
// function gettingStr(str) {
//     let arr = data;
//     return arr.filter(function (value) {
//         return value.country.includes(str) || value.city.includes(str) || value.hotel.includes(str);
//     })
//         .map(function (value) {
//             return value.country + ', ' + value.city + ', ' + value.hotel
//         })
// }
//
// console.log(gettingStr('Marocco'))
//
// //lesson 5
//
// function palindromeArr(str) {
//     str = str.toLowerCase().replace(/\s/g, '').split(',').join('');
//     return str === str.split("").reverse().join("");
// }
//
// console.log('1', palindromeArr('Тринитраплазмаполиуритан'));
// console.log('1', palindromeArr('Утроба, к аборту'));
//
//
// const hotels = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
// function gettingStrHotel(str) {
//     let arrHotel = hotels;
//     return arrHotel.filter(function (value) {
//         return value.country.includes(str) || value.city.includes(str) || value.name.includes(str);
//     })
//         .map(function (value) {
//             return value.country + ', ' + value.city + ', ' + value.name;
//         })
// }
//
// console.log(gettingStrHotel('Poland'));
//
//
// let countrySearch = hotels.reduce((accum, cValue) => {
//
//     let result = {...accum};
//     if (!result[cValue.country]) {
//         result[cValue.country] = [];
//     }
//     if (!result[cValue.country].includes(cValue.city)) {
//         result[cValue.country] = [cValue.city];
//     }
//     return result;
// }, {});
//
// console.log(countrySearch);
//
//
// // lesson 7
//
// const obj1 = {
//     a: 'a',
//     b: {
//         a: 'a',
//         b: 'b',
//         c: {
//             a: 1,
//         },
//     },
// };
// const obj2 = {
//     b: {
//         c: {
//             a: 1,
//         },
//         b: 'b',
//         a: 'a',
//     },
//     a: 'a',
// };
// const obj3 = {
//     a: {
//         c: {
//             a: 'a',
//         },
//         b: 'b',
//         a: 'a',
//     },
//     b: 'b',
// };
//
//
// function deepEqual(object1, object2) {
//
//     const box1 = Object.getOwnPropertyNames(object1);
//     const box2 = Object.getOwnPropertyNames(object2);
//
//     if (box1.length !== box2.length) {
//         return false;
//     }
//
//     for (const prop of box1) {
//         if (typeof (box1[prop]) === 'object') {
//             if (!deepEqual(box1[prop], box2[prop])) {
//                 return false;
//             }
//         }
//
//         let result = (object1[prop] === object2[prop]);
//
//         return result;
//     }
// }
//
// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));
// console.log(deepEqual(obj2, obj3));
//

//lesson 8

const currentYear = new Date().getFullYear();


const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };
}

class Student extends User {
    constructor(admissionYear, courseName, firstName, lastName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    };

    get course(){
        return currentYear - this.admissionYear;
    }
}

const data2 = studentsData.map((a) => new Student(...Object.values(a)));

class  Students{
    constructor(students){
        this.students = students;
    };

    getInfo(){
        const sorted = this.students.sort((a, b) => a.course - b.course);
        return sorted.map((a) => `${a.fullName} - ${a.courseName}, ${a.course} курс`);

    };
}

const students = new Students(data2);

console.log(students.course);
console.log(students.getInfo());
console.log(data2);








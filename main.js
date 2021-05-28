let user = 'John Doe';
console.log('6.2', user);

const student = 'Konstantsin';
console.log('6.3', student);

user = student;
// Konstantsin
console.log('6.7', user);

let test = 1;
test++;
test += 1;
// 3
console.log('7.5', test);

test--;
// 2
console.log('7.7', test);

test = !!test;
// true
console.log('7.10', test);

let part8 = [2, 3, 5, 8];
let value = 1;
for (let i = 0; i < part8.length; i++) {
    value *= part8[i];
}
console.log('8', value);

let part9 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < part9.length; i++) {
    value = part9[i];
    if (value > 5 && value < 10) {
        console.log('9', value);
    }
}

let part10 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < part10.length; i++) {
    value = part10[i];
    if (value % 2 === 0 && value !== 0) {
        console.log('10', value);
    }
}

// lesson 3

function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '').split(',').join('');
    return str === str.split("").reverse().join("");
}

console.log('1', palindrome('Тринитраплазмаполиуритан'));
console.log('1', palindrome('Утроба, к аборту'));


function checkMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function checkMinSecVer(a, b) {
    return a < b ? a : b;
}


function checkMax(a, y) {
    if (a > y) {
        return a;
    } else {
        return y;
    }
}

function checkMaxSecVer(a, y) {
    return a > y ? a : y;
}

console.log('2.1', checkMin(2, -38));
console.log('2.2', checkMax(56, 7));
console.log('2.3', checkMinSecVer(2, 87));
console.log('2.3', checkMaxSecVer(65, 8));


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = getRandom(0, 101);
}
arr.length = 10
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().split('0').join('zero');
}

console.log('3', arr);

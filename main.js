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

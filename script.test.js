const sum = (a) => {
    return (b) => {
        return a + b;
    }
}

console.log(sum(5)(2));

test('sum 5 + 2 function check', () => {
    let a = 5;
    let b = 2;

    expect(sum(a)(b)).toBe(7);
})
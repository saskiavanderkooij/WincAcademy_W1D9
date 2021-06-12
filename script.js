const bignumber = function (number) {
    if (number > 100)
        return true;
    return false;
};

console.log(bignumber(500));
// function that does something

const bouncer = function (maxguest, guest, age) {
    if (guest < maxguest && age >= 18) {
        return "come in";
    } else if (guest >= maxguest && age >= 18) {
        return "it's too busy now, come back later";
    } else {
        return "this is a club for adults";
    }
};

console.log(bouncer(50, 50, 17));
// function that does something

const average = function (numbers) {
    const result = numbers.reduce((a, b) => (a + b)) / numbers.length;
    return result;
}

const grades = [6, 7, 4, 10, 7];
console.log(Math.round(average(grades)));
// function that produce something
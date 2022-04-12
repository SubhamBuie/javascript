// level {1/2/3}
//level 2
const number = 6;
let n1 = 1, n2 = 1, nextTerm;
let sum = 0;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    sum = sum + n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

console.log("sum: ", sum);
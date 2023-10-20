let x = 15;
let y = 27;

const primeNumbers = [2, 3, 5, 7, 11];
function primeFact(x) {
  const array = [];
  let i = 0;
  while (x > 0) {
    if (x % primeNumbers[i] !== 0) {
      i++;
      if (i > primeNumbers.length) break;
    } else {
      array.push(primeNumbers[i]);
      x = x / primeNumbers[i];
    }
  }
  return array;
}

const factx = primeFact(x);
const facty = primeFact(y);

console.log(factx);
console.log(facty);

let common = [];

for (let i = 0; i < factx.length + facty.length; i++) {
  console.log(common);
  if (i > factx.length) {
    common.push(...facty.slice(i, facty.length));
    break;
  }
  if (i > facty.length) {
    common.push(...factx.slice(i, factx.length));
    break;
  }
  if (factx[i] === facty[i]) {
    common.push(factx[i]);
  } else {
    common.push(factx[i], facty[i]);
  }
}

console.log(common);

/* let common = factx.filter((e) => {
  if (facty.indexOf(e) !== -1) return e;
});

common = Array.from(new Set(common));

common = common.map((e) => e ** 2);

console.log(
  "ans: ",
  common.reduce((a, e) => (a *= e), 1)
); */


// 1. Print odds 1-20

console.log("Print odds 1-20");

for (var i = 1; i <= 20; i+=2){
    console.log(i);
}

// 2. Decreasing Multiples of 3

console.log("");
console.log("Decreasing Multiples of 3");

for (var i = 100; i >= 0; i--){
    if (i % 3 == 0 && i / 3 > 0){
        console.log(i);
    }
}

// 3. Print the sequence

console.log("");
console.log("Print the sequence");

for (var i = 4; i >= -3.5; i -= 1.5){
    console.log(i);
}

// 4. Sigma

console.log("");
console.log("Sigma")

var sum = 1;

for (var i = 2; i <= 100; i++){
    sum += i;
}

console.log(sum);

// 5. Factorial

console.log("");
console.log("Factorial");

var product = 1;

for (var i = 2; i <=12; i++){
    product *= i;
}

console.log(product);
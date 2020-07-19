// // Q1. Create a for loop that iterates to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 , and "fizzbuzz" at multiples of 3 and 5
for (let n=1; n<=100; n++) {
    let output = "";
    if (n%3==0) output+= "fizz";
    if (n%5==0) output+= "buzz";
    if (n%3==0 && n%5==0) output= "fizzbuzz";
console.log(output || n);
}







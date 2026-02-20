/*console.log("Start");

setTimeout(() => {
    console.log("Loading Data...");
}, 3000);

console.log("End");


console.log("Step 1");

setTimeout(() => {
    console.log("Step 2");
}, 2000);

console.log("Step 3"); */

console.log("Start");

for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

console.log("End");


console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
    for (let i = 0; i <= 1000; i++)
    {
    console.log(i);
}
}, 2000);

console.log("End");

//Synchronous
//Asynchronous


//Synchronous
console.log("Start 1"); 
console.log("Start 2"); 
console.log("Start 3");



//Asynchronous

console.log("Start 1");

setTimeout(()=>{
    console.log("Start 2")
}, 3000)

console.log("Start 3");


function sendOTP()
{
    setTimeout(()=>{
        console.log("OTP Sent")
    }, 3000);
}

console.log("proceesing");
sendOTP();
console.log("Please Wait");



function heavyTask() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // blocking code
    }
}

console.log("Start");
heavyTask();
console.log("End");


//Way to achieve Asynchronous

//1. Callback
//2. Promises
//3/ Async/Awit

//Ways to Handle Asynchronous in JavaScript
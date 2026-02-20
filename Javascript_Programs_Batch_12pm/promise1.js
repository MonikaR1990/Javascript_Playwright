let myPromise = new Promise(function(resolve, reject) {

    let success = false;

    if(success) {
        resolve("Task Completed Successfully");
    } else {
        reject("Task Failed");
    }

});

myPromise
.then(function(result)
{
    console.log(result);
})
.catch(function(error)
{
    console.log(error);
});


async function test() {
    return "Hello";
}

console.log(test());

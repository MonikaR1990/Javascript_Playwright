                    //promise

// A promise is an object that represents a value that will be available in the future
/*
let myPromise = new Promise(function(resolve, reject)
{
   let success = false; 

   if(success)
   {
    resolve("Task Finished");
   }
   else
   {
    reject("Task Failed");
   }
});

myPromise
.then(function(result)
{
    console.log(result)
})
.catch(function(error)
{
    console.log(error);
})



*/

function placeOrder(foodItem)
{
    console.log("You Placed for Food: " + foodItem);

    return new Promise(function(resolve, reject)
{
    console.log("Food is being prepared...(Pending)");

    setTimeout(()=>
    {
        let available = true;

        if(available)
        {
            resolve(foodItem + " is delivered");
        }
        else
        {
            reject(foodItem + " is not available");
        }

    }, 2000);
})
}


placeOrder("Pongal")
.then(function(result)
{
    console.log(result);
})
.catch(function(error)
{
    console.log(error)
})



function checkLoan(creditScore)
{
    return new Promise(function(resolve, reject)
{
    setTimeout(()=>{
        if(creditScore>700)
        {
            resolve("Loan approved");
        }
        else
        {
            reject("Loan Cancelled")
        }
    }, 3000);
})
}

checkLoan(650)
.then(function(result)
{
    console.log(result);
})
.catch(function(error)
{
    console.log(error);
}) 

//asyn / await

async function getLoan() 
{
        let loanStatus = await checkLoan(580);
        console.log(loanStatus);
}

getLoan();



















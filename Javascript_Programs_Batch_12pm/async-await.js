function getData()
{
    return new Promise(function(resolve)
{
    setTimeout(()=>{
        resolve("Data Received")
    }, 2000);
})
}

/*
getData()
.then(function(result)
{
    console.log(result)
}) */

//async/await 

//async - Makes a function return a Promise.
//await - Waits for the promise to finish (resolve/reject)

async function fetchData() 
{
    let result = await getData();
    console.log(result);
}

fetchData();



function checkLoan(creditScore)
{
    return new Promise(function(resolve, reject)
{
    setTimeout(()=>{
        if(creditScore>700)
        {
            resolve("Loan Approved")
        }
        else
        {
            reject("Loan Cancelled")
        }
    }, 3000);
})
}

/*
checkLoan(790)
.then(function(result)
{
    console.log(result);
})
.catch(function(error)
{
    console.log(error);
}) */

    async function loanStatus() 
    {
        try
        {
        let staus = await checkLoan(780);
        console.log(staus);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    


loanStatus();














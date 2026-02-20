function getData()
{
    return new Promise(function(resolve)
{
    setTimeout(() => {
        console.log("Data Received")
    }, 2000);
})
}

async function fetchData(params) 
{
    let result = await getData();
    console.result();    
}

fetchData();

/* getData() returns a Promise

setTimeout waits 2 seconds

After 2 seconds → resolve("Data received")

await waits until Promise is completed

Then prints → Data received */

 
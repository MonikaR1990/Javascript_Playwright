function getUserId(id, name)
{
    console.log("Got User ID: " + id);

    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({id : id , name : name})
        },1000);
    });
}


function getSubscription()
{
    console.log("Please Subscribe");

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve([{id: 1,  title: "HotStar"},
                {id: 2, title: "Prime"},
                {id: 3, title: "Jio"}
            ])
        }, 2000);
    })
}

function calculateCost(subscriptions)
{
    return new Promise(function(resolve, reject)
{
    setTimeout(() => {
        resolve(subscriptions.length * 100);
    }, 2000);
})
}



/*
getUserId(1, "Monika")
.then(function(user)
{
    console.log(user);
})

getSubscription()
.then(function(sub){
    console.log(sub);
})
 */


/*
getUserId(1, "Monika")
.then(getSubscription)
.then(calculateCost)
.then(function(cost){
    console.log("My Total Cost is : " + cost)
})

/* 
resolve(value)  → sends value
.then(value => ...) → receives value
console.log(value) → prints value */


async function startProcess() 
{
    const user = await getUserId(1, "Monika");
    console.log(user);

    const subscription = await getSubscription();
    console.log(subscription);

    const cost = await calculateCost(subscription);
    console.log(cost);
}

startProcess();
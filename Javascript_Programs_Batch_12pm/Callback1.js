/*function sayHello()
{
    console.log("Hello")
}

sayHello();


// cooking = main function
// calling you = callback

function cooking(callback)
{
    console.log("Cooking Started");

    setTimeout(function()
    {
        console.log("Cooking Finished");
        callback(); //callYou();
    }, 3000)
}

function callYou()
{
    console.log("Calling you...Food is ready")
}

cooking(callYou); //One function call another function

//callback = callYou



function greet(name, callback)
{
    console.log("Hi " + name);
    callback(); //calling the call back function
}

function sayHello()
{
    console.log("Bye");
}

greet("Narmatha", sayHello);

*/


function process(callback)
{
    console.log("Processing");
    callback(); //task();
}



process(function()
{
    console.log("Task Completed")
});


//callback = task







function login(username, password, callback)
{
    console.log("Check Credentials");

    setTimeout(()=>{
        if(username === "admin" && password === "admin@123")
        {
            callback("Login Sucessfull");
        }
        else
        {
            callback("Login Failed");
        }
    }, 2000);
}

login("admin1", "admin@123", function(result)
{
    console.log(result)
})


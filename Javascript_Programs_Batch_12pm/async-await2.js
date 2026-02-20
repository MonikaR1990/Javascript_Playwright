function getWeather(city)
{
    return new Promise(function(resolve, reject)
{
    setTimeout(()=>{
        if(city === "Chennai")
        {
            resolve("Tempreature is 32°C");
        }
        else
        {
            reject("City Not Found")
        }
    }, 3000);
})
}

async function checkWeather()
{
    try
    {
        let result = await getWeather("Chennai");
        console.log(result);
    }
    catch(e)
    {   
        console.log(e);
    }    
}

checkWeather();
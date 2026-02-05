let mark = 23;

if(mark>=35)
{
    console.log("Pass");
}
else
{
    console.log("Fail")
}


let marks = 45;

if(marks>=90)
{
    console.log("Grade A");
}
else if(marks>=75)
{
    console.log("Grade B");
}
else if(marks>=60)
{
    console.log("Grade C");
}
else if(marks>=50)
{
    console.log("Grade D");
}
else
{
    console.log("Fail");
}


let day = 8;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
}

let color = "red";

switch(color)
{
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Ready");
        break;
    default:
        console.log("Light Off");
        break;
}
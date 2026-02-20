//Abstraction is the internal process to hiding implementation details

//Abstraction can achieve using:
    // 1. Function
    // 2. Classes
    // 3. Encapsulation (Private fields #)
    // 4. Interface concepts using patterens


//1. FUnction

function startCar()
{
    console.log("Car Started")
}


startCar();



function markAttendance(batchId)
{
    checkBatch(batchId)
    saveAttendance(batchId);
    generateReport(batchId); //Hide Function
}

function checkBatch(batchId)
{
    console.log(batchId + " Checking Batch");
}

function saveAttendance(batchId)
{
    console.log(batchId + " Saving Attendance");
}


function generateReport(batchId)
{
    console.log(batchId + " Generating Report");
}


markAttendance("Javascript_11 to 12_Batch");


function placeOrder(orderId)
{
    validateOrder(orderId);
    processPayment(orderId);
    shipOrder(orderId); 
};

function validateOrder(orderId)
{
    console.log(orderId + "Validating Order")
}



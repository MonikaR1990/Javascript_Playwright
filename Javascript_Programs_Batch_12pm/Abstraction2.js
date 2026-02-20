function markAttendance(batchId) {
    checkBatch(batchId);
    saveAttendance(batchId);
    generateReport(batchId);
}

function checkBatch(batchId) {
    console.log("Checking batch...");
}

function saveAttendance(batchId) {
    console.log("Saving attendance...");
}

function generateReport(batchId) {
    console.log("Generating report...");
}

markAttendance("Java-B1");
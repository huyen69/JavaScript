// function showDiaLog() {
//     alert('Hello world!');
// }
// showDiaLog();
// function showMessage(message) {
//     console.log(message);
// }

// showMessage("Hi anh em F8!");

function writeLog() {
    var myString = '';
    for(var param of arguments) {
            myString += `${param} - `
    }
    console.log(myString)
}

writeLog('log 1' , 'log 2' , 'log 3 ' , 'log 4');

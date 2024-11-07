var i = 0

var isSucceeded = false;

// while (i < 10) {
//     console.log(i)
//     i++
// }

// do while loop
do {
    i ++;

    console.log( 'Nap the lan ' + i)
    if (true) {
        isSucceeded = true;
    }
} while (!isSucceeded && i < 3);

// break:thoat khoi vong lap and continue:bo qua vai lan cua vong lap
for(var i = 0; i <10 ; i++) {

    if (i% 3 !== 0) {
        continue;
    }
    console.log(i)

    
}

// vong lap long nhau 

var myArray = [
    [1,2],
    [3,4],
    [5,6]
]

for(var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length ; j++) {
        console.log(myArray[i][j])
    }
}

// // for loop
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Java',
//     'Python',
//     'Ruby',
//     'C++',
//     'C#',
//     'C',
//     'C#',
// ]

// var arrayLength = myArray.length;
// // console.log(myArray[3])
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }
// // for in loop
// var myInfor = {
//     name : 'Huyen Phung',
//     age : 19,
//     address: 'Ha Noi'
// }

// for (var key in myInfor) {
//     console.log(key + ' : ' + myInfor[key]);
// }

var language = [
    'JavaScript',
    'PHP',
    'Java',
    'Python',
    'Ruby',
    'C++',
    'C#',
    'C',
]
// for( var key in language) {
//     console.log(key);
// }
//  for of loop : lay ra ptu cua mang va lay tung chu cai
for(var value of language) {
    console.log(value);
}
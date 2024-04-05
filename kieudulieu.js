// Number type
var a =1;
var b =2;
var c = 1.5;

console.log(typeof a)
// string type
var fullName = "Huyen Phung";

console.log(fullName);

// boolean type
var isSuccess = true;
console.log(typeof isSuccess)
// undefined type
var age;

console.log(age);

// null
var isNull = null;

console.log(isNull);

// Symbol

var id = Symbol('id');
// unique
var id2 = Symbol('id');

console.log(id == id2);

// function
var myFunction = function() {
    alert('Hello');
}
myFunction();

// myObject 
var myObject = {
    name : 'Huyen Phung',
    age : 19,
    address: 'Ha Noi'
};
console.log('myObject',myObject)

// array 
var myArray = [
    'JavaScript',
    'PHP',
    'Java'
];

var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e)
var a = '';
var b = 0;
var c = [];
var d = 1 > 2;
var e = {};
var f = '0';
// var a = 1 + 2;
// console.log(a);
// var fullName = 'Dang Ngoc Son';

// var a = 1;
// var b = 2;

// if (a < b) {
//     alert('dung');
// }
// else {
//     alert('sai');
// }

// if(a>0 && b >0) {
//     alert('a & b lon hon 0')
// }

// var a = 1;
// var b = 2;

// var c = a + b;
// console.log(c);
// var c = a - b;
// console.log(c);
// var c = a * b;
// console.log(c);
// var c = a ** b;
// console.log(c);
// var c = a / b;
// console.log(c);
// var c = a % b;
// console.log(c);
// var c = a++;
// console.log(c);
// var c = a --;
// console.log(c);

// toan tu gan
// var a  =1;

// a += 2;

// console.log(a);
// a -= 2;

// console.log(a);

// a=a * 2;

// console.log(a);
// a=a / 2;

// console.log(a);
// a=a % 2;

// console.log(a);
// var b = ++a * a--;
// console.log(b);

// var firstName = 'huyen';
// var lastName = 'phung';
// console.log(firstName+ ' ' + lastName);

// var name = 'Huyen';

// name += ' phung';
// console.log(name);

// var a = 1;
// var b = 2;
// if(a != b) {
//     console.log('Dieu kien dung!');
// }
// else {
//     console.log('Dieu kien sai');
// }

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0) {
    console.log('dieu kien dung'); 
}
var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); 

var couse = {
    name: 'javascript',
    coin:2
}

if (couse.coin == 2) {
    console.log( `${couse.coin} coin`);
} else {
    console.log('free')
}

var result = couse.coin >0 ? `${couse.coin} coin` : 'Free';
console.log(result);
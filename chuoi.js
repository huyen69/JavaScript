// var fullName = 'Huyen Phung la \"Dev-er\"';

// console.log( fullName);
// syntax error loi cu phap

var firstName =   '   huyen JS JS'   ;
// var lastName = 'Phung';

// console.log(`toi la ${firstName} ${lastName}`);

// length do dai chuoi
console.log(firstName.length);

// find index timf vi tri tim kiem bat dau tu so 0 

console.log(firstName.indexOf('u'));
// cut string cắt chữ đó gaa

console.log(firstName.slice(0, 3));

// replace string ghi đè thay thế

console.log(firstName.replace(/JS/g, 'o'));
// convert string to upper case chuyển đổi thành chữ hoa

console.log(firstName.toUpperCase());

// convert string to lower case chữ thường

console.log(firstName.toLowerCase());

// trim loại bỏ khỏang trắng

console.log(firstName.trim().length);

// trim left

// console.log(firstName.trimLeft());
// split string

console.log(firstName.split(' '));

// get a character by index

console.log(firstName.charAt(0));
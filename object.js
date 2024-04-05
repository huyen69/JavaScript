// var emailKey = 'email';
// var myInfor = {
//     name: 'Huyen Phung',
//     age: 19,
//     address: 'Ha Noi,VN',
//     [emailKey]: 'huyen.vn'
// }
// // thêm 1 gtri
// myInfor.email = 'minhhuyen@gmail.com'
// console.log(myInfor['email']);

// var myKey = 'address'
// console.log(myInfor.myKey)

// object constructor 
function User(firstName, lastName, avt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avt = avt;

    this.getName = function(){
        return `${this.firstName}  ${this.lastName}`
    }
}

var author = new User('Huyen','Phung','avt');
var user = new User('Huyen','Ph','avt');

author.title = '....'
user.comment='hhh'
// prototype them vao 1 thuoc tinh o doi tuong ngoai
User.prototype.getName = 'Huyen'
User.prototype.getClassName = function(){
    return this.getName
}
console.log(author);
console.log(user.getClassName());

// object propertype
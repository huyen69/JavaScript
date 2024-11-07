// Call back
// Là hàm đc truyền qua đối số
// khi gọi là hàm khác
// 1. là hàm
//  2. được truyền qua đối số 
// function myFunction(param){
//     console.log(typeof param)
// }
// function myCallback() {

// }
// myFunction(myCallback);
Array.prototype.map2 = function() {
    var arrayLength = this.length;
    for (var i = 0; i < this.length; ++i){

    }
}
var courses = [
    'JavaScript',
    'PHP',
    'Huyen'
];
courses.map2(function() {
    
});
// var htmls = courses.map2(function(courses){
//     // console.log(courses)
//     return `<h2>${courses}</h2>`;
// });
// console.log(htmls.join(''));
function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }
  function second(){
    console.log(2);
  }
  first();
  second();
  
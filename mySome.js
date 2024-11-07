// hàm some nếu 1 element trong bảng trả về là true thì all là true
Array.prototype.some2 = function(callback){
    for(var index in this ){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true;
            };

        }
    }
    return false;
}


var courses = [
    { id: 1, name: 'Javascript', coin: 250, isFinished: false },
    { id: 2, name: 'HTML, CSS', coin: 350, isFinished: false },
    { id: 3, name: 'Ruby', coin: 400, isFinished: false },
    { id: 4, name: 'PHP', coin: 220, isFinished: false },
    { id: 5, name: 'ReactJS', coin: 500, isFinished: false },
    { id: 6, name: 'Ruby', coin: 120, isFinished: false },
]
var result = courses.some2(function (courses,index,array){
    return courses.isFinished; 

})

var result = courses.some(function (courses,index,array) {
    return courses.isFinished; 
})
console.log(result);

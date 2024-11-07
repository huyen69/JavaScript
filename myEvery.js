// hàm every tất cả element đều phải thỏa mãn điều kiện mới trả về là true, còn không trả về false
Array.prototype.every2 = function(callback){
    for(var index in this ){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index],index,this)){
                return true;
            };

        }
    }
    return false;
}


var courses = [
    { id: 1, name: 'Javascript', coin: 250, isFinished: true },
    { id: 2, name: 'HTML, CSS', coin: 350, isFinished: true },
    { id: 3, name: 'Ruby', coin: 400, isFinished: false },
    { id: 4, name: 'PHP', coin: 220, isFinished: true },
    { id: 5, name: 'ReactJS', coin: 500, isFinished: true },
    { id: 6, name: 'Ruby', coin: 120, isFinished: true },
]
var result = courses.every2(function (courses,index,array){
    return courses.isFinished; 

})

var result = courses.every(function (courses,index,array) {
    return courses.isFinished; 
})
console.log(result);

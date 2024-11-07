Array.prototype.map2 = function(callback){
    var output = [], arrayLength = this.length
    for (var i = 0; i < arrayLength;++i){
        var result = callback(this[i],i)
        output.push(result)
    }
    return output;
}
var courses = [
    'JS',
    'HTML',
    'CSS',
    'NodeJS',
    'React',
    'VueJS',
]
var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
})
// courses.map(function(course){
//     return `<h2>${course}</h2>`
// })
var htmls = courses.map(function(course){
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''));

Array.prototype.myMap = function(cb) {

    var trung = [];
    
    for(var i = 0;i<this.length;++i) {
    
    var chim = cb(this[i],i)
    
    trung.push(chim)
    
    }
    
    return(trung)
    
    }
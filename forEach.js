Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        // console.log('index: ' + index);
        console.log(index,this.hasOwnProperty(index));
        
    }
}
var courses = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'React',
    'Redux',
];
console.log(Number.prototype);

courses.length = 1000
console.log(courses);

courses.forEach2(function(courses,index,array){
    console.log(courses,index,array);
    
})
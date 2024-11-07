// var array = ['a', 'b', 'c','a', 'b', 'c']

// console.log([...(new Set(array))]);

function deQuy() {

}

deQuy();

// 1.xac dinh diem dung
// 2.logic handle => tao ra diem dung
// 3.

// function countDown(num) {
//     if(num >0) {
//         console.log(num);
//         return countDown(num - 1);
//     }
//     return num;
// }

// countDown(10);

function loop(start , end , callback){
    if(start <= end ){
        callback(start);
        return loop(start +1 , end, callback);
    }
}

var array = ['javascript', 'PHP', 'js',]

loop(0 , array.length -1 , function(index){
    console.log('index: ',index);
})

// giai thua

function giaiThua(num){
    var output = 1;
    for(var i = num ; i >0;i--){
        output = output*i;
    }
    return output;
}
console.log(giaiThua(5))

// de quy giai thua

function deQuyGiaiThua (number ){
    if (number > 0) {
        return number * deQuyGiaiThua(number - 1);
    }
    return 1;
}

console.log(deQuyGiaiThua(10))
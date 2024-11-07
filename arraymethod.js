// array methods 
var courses = [
    {
        id: 1,
        name: 'Javascript',
        price: 0,
        
    },

    {
        id: 2,
        name: 'PHP',
        price: 2000
    },

    {
        id: 3,
        name: 'Java',
        price: 3000
    },

    {
        id: 4,
        name: 'Python',
        price: 4000
    }, 
    {
        id: 5,
        name: 'Ruby',
        price: 5000
    },
    {
        id: 6,
        name: 'PHP',
        price: 2000
    }
];

courses.map(function() {

})

// every array kiem tra all ptu trong mang
var isFree = courses.every(function(course , index) {
    console.log(index)
    return course.price === 0;
})

console.log(isFree)
// some chi can 1 ptu trong mang thoa man -> deu dung
var isFree = courses.some(function(course , index) {
    console.log(index)
    return course.price === 0;
})

console.log(isFree)

// find:ket qua mong muon tra ve 1 ptu
var isFree = courses.find(function(course , index) {
    console.log(index)
    return course.name === 'PHP';
})

console.log(isFree)

// filter : ket qua mong muon loc het ptu

var isFree = courses.filter(function(course , index) {
    console.log(index)
    return course.price === 'PHP';
})

console.log(isFree)

// map chỉnh sửa thay đổi của 1 array
function courseHandler(course , index) {
    // console.log(course);
    return {
        id: course.id,
        name: `<h2> ${course.name} </h2> ` ,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    };
}
var newCourse = courses.map(courseHandler);
console.log(newCourse.join(''));

// reduce tính tổng số...

// biến lưu trữ
var i = 0;
function courseHandler(accumulator , currentValue , currentIndex , originArray) {
 i++;
 console.table({
    'Lượt chạy ' :i,
    'Biến tích trữ: ' :accumulator
 })
}
var totalCoin = courses.reduce(courseHandler , 10);

// lặp qua các ptu

// thực hiện việc lưu trữ

var languages = [
    'javascript',
    'PHP',
    'HTML CSS'
];

// to String for array of languages

var languagesString = languages.toString();
console.log(languagesString);

// join languages chuyển đổi giữa các mảng

var languagesJoined = languages.join(' - ');
console.log(languagesJoined);
// pop languages trả về phần tử cuối mảng
var languagesPop = languages.pop();
console.log(languagesPop);
// push languages thêm phần tử cuối mảng
var languagesPush = languages.push('Java');
console.log(languagesPush);

// shift languages trả phần tử đầu mảng trả đi phần tử đã xóa

var languagesShift = languages.shift();
console.log(languagesShift);

// unshift languages

var languagesUnshift = languages.unshift('Python');
console.log(languagesUnshift);
// splicing languages xóa cut chèn ptu
var languagesSplice = languages.splice(1, 1 , 'C++');
console.log(languagesSplice);
// concat languages gộp 2 mảng vào
var language2 = ['ABC' , 'XYZ']
var languagesConcat = languages.concat(language2);
console.log(languagesConcat);
// slice languages cắt tham số
var languagesSlice = languages.slice(1, 3);
console.log(languagesSlice);
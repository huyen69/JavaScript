// var inputValue;

var inputELement = document.querySelector('select');
inputELement.onchange = function(e) {
    console.log(e.target.value);
    
}
var keyElement = document.querySelector('input[type="text"]');
keyElement.onkeyup = function(e) {
    console.log(e.which)
    switch (e.which) {
        case 27:
            console.log('thoat');
            break;
    }
}
 
var aElement = document.links;

// console.log(aElement);
// for (var i = 0; i < aElement.length; ++i){
//     aElement[i].onclick = function(e){
//         // console.log(e.target.href);
//         if (!e.target.href.startswith('https://f8.edu.vn')){

//             e.preventDefault();
//         }
//     }
// }

document.querySelector('ul').onclick = function(e){
    console.log(e.target);
    
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.preventDefault();
}


ulElement.onclick = function(e){
    console.log(e.target);
}

// event listener
var btn = document.getElementById('btn')
btn.onclick = function(){
    console.log('viec 1');
    console.log('viec 2');
    console.log('viec 3');
    
}
setTimeout(function(){
    btn.onclick = function() {} 
}, 3000 )
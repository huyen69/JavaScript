// click chuột: onclick
// di chuột vào: onmouseover
// di chuột ra: onmouseout
// this là element node của phần đặt biến
// ví dụ: <div onmouseout="console.log(this)" class="box box2 box3">DOM</div>

var h1Element = document.querySelector('h1');
h1Element.onclick = function() {
    console.log(h1Element);
    
}


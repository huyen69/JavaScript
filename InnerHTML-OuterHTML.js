var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1>New Heading</h1>';

console.log(document.querySelector('h1').innerText);

boxElement.style.width = '100px'
boxElement.style.height = '200px'
boxElement.style.backgroundColor = 'red'
 
Object.assign(boxElement,style,{
    // them style vao day
});
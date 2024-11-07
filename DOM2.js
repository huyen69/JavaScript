/** HTML DOM có 3 thần phần
 * 1. Element eg: => h1, div, p, span, button, img, ul, li, form, input, ...
 * 2. Attribute => eg: id, class, src, href, title, ...
 * 3. Text => eg: text
 */

/**
 * 1. getElementById - get only one element have same id -> return object
 * 2. getElementsByClassName - get all elements have same class name -> return array
 * 3. getElementsByTagName - get all elements have same tag name -> return array
 * 4. querySelector - get first element have same class, id, tag, ... -> return object
 * 5. querySelectorAll - get all elements have same class, id, tag, ...-> return array
 */

var listItemNodes = document.querySelectorAll('.box-1 li')
console.log(listItemNodes);


// console.dir(document); -> D.O.M
// console.log(window); -> window object represents : B.O.M
// document is given by window. So, window.document --> document

// write generic text in html 
// document.write("hello")

//findind the element
//1. document.getElementById("id-name") --> null / element
//2. document.getElementByClassNamw("class-name") --> html Collection - iterable []/ [element.element]
//3. document.getElementByTagName() --> html Collection - iterable []/ [element,elemenent,...]
//4. document.querySelector() --> 
//5. document.querySelectorAll()

// const elem = document.getElementById("text-1");
// console.log(elem);
// elem.style.color = "blue";

const elem = document.getElementsByClassName("text-1");
console.log(elem);

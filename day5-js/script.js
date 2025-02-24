// console.dir(document);
// console.dir(document.children);
// console.dir(document.children[0]);
// console.dir(document.children[0].children[1]);
// console.dir(document.children[0].children[1].children[0].style.color='red');

// console.dir(document.children[0].children[1].children[2].style.color="blue");

// const outerDiv = document.querySelector("div");
// outerDiv.style.backgroundColor = "blue";

// console.dir(outerDiv);
//inner div bg yellow ----
// const divChildren = Array.from(outerDiv.children);
// // console.log("divChildren, divChildren");

// divChildren.forEach((elem) => {
//     elem.style.backgroundColor = "yellow"
// });

// const divChildren = Array.from(outerDiv.querySelectorAll());








const mappings = {
    Invitation : "You are invited fro event",
    Reminder : "You are reminder for task",
    Notice: "You have a notice from college",
    Message: "You have 7 messages",
};
// // Append, AppendChild, Remove, RemoveChild, 

// const outerDiv = document.querySelector("div");
// const outerDivChildren = Array.from(outerDiv.children);
// outerDivChildren.forEach((elem,obj) =>{
//     if(elem[0] == "Invitation"){
//         elem[1] = 
//     }
// })


const newElement = document.createElement("div");

const rootElement = document.querySelector("body");
newElement.innerText = "Hi from DOM"
rootElement.appendChild(newElement);

console.log(Object.entries(mappings));

Object.entries(mappings).forEach((elem) => {
    const newChildDiv = document.createElement("div");
    // newChildDiv.innerText= "hello from dom !";
    newChildDiv.style.border = "1px solid lime";
    newChildDiv.innerHTML = `
        <h4 style ="color : orange">${elem[0]}</h4>
        <p>${elem[1]}</p>
    `;
    newElement.appendChild(newChildDiv);
});
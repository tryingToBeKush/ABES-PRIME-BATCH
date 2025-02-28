// const parent = document.getElementById("parent");

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = 'item 1';

// const li2 = document.createElement('li');
// li2.innerText = 'item 2';

// const li3 = document.createElement('li');
// li3.innerText = 'item 3';

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// parent.appendChild(ul);
// 
// console.log(React);
// console.log(ReactDOM);
// 
// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);
// 
// const li1 = React.creatElement(
    // "li", {
        // style:{
            // color: "blue",
        // }
    // }, 
    // "Item 1"
// ); // -> type, options, children
// const li2 = React.creatElement(
    // "li", {
        // style : {
            // className: "text-big",
        // }
    // },
    //  "Item 2"
// ); // -> type, options, children
// const li3 = React.creatElement("li", {}, "Item 3"); // -> type, options, children
// 
// const ul = React.creatElement("ul", {}, [li1,li2,li3]);
// 
// reactRoot.render(ul);
// ---------------------------------------------------------------------
// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);
// // const title = React.createElement("h1" , {}, "Hello from React Dom");
// // console.log("typd of title", typeof title);
// // console.log("title :", title);


// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     type : "h1",
//     key : null,
//     ref : null,
//     props :{
//         children: "hello from react don",
//     },
//     _owner: null,
//     _store: {},
// };


// reactRoot.render(title2);
///-----------------------------------------------------

// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const title2 = <h1>Hello from JSX</h1>; //React element
// const title3 = <h1>Hello from JSX</h1>; //React element

// reactRoot.render(title2);
//--------------------------------------------------
// const domRoot = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const Title3 = () => {
//     return <h1> hello from jsx<h1/>


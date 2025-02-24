const data = [
    {name:'a', city:'Delhi', email:'@gmail'},
    {name:'b', city:'Mumbai', email:'@yahoo'},
    {name:'c', city:'Hyderbad', email:'@hotmai'},
    {name:'d', city:'Noida', email:'@laskdjf'},
];

const root = document.getElementById('parent');

data.forEach((elem) => {
    const newCard = document.createElement("div");
    
    newCard.addEventListener('click',() =>{
        Console.log("div clicked");
        newCard.style.backgroundColor = getRandomColor();
    },true);
    
    newCard.className = 'card';
    newCard.innerHTML = `
        <h4>${elem.name}</h4>
        <h6>${elem.email}</h6>
        <p class = "text" >${elem.city}</p>
    `;
    root.appendChild(newCard);
});

const handleBgChange = () => {
    console.log("btn-clicked");
    const btn = document.querySelector("body");
    btn.style.backgroundColor = getRandomColor();
};

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed} , ${randomGreen}, ${randomBlue})`;
}

const textElement = document.querySelector(".text");
textElement.addEventListener("click", (event) => {
    console.log("para clicked",event)
    event.stopPropagation();
    textElement.style.backgroundColor = getRandomColor();

});
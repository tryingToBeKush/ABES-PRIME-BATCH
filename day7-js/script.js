 const data = [
     {
         email : "rakesh@gmail.com",
         name: "Rakesh",
         city: "Delhi", 
     },
     {
         email: "mohan@gmail.com",
         name:"Mohan",
         city:"Noida",
     },
     {
         email: "lasdkjf@gmail.com",
         name:"Rishab",
         city:"Mumbai",
     },
     {
         email : "ramensh@gmail.com",
         name: "Ramesh",
         city: "Delhi", 
     },
    
 ];
 
 const root = document.getElementById("root");
 const selectElement = document.getElementsByTagName("select")[0];

 const showOptions = () => {
     cities.forEach((city) => {
         const newOption = document.createElement("option");
         newOption.value = city;
         newOption.innerText = city;
         selectElement.appendChild(newOption);
     });
 };
 const showCards = (newData) => {
     root.innerHTML= "";
     newData.forEach((elem, idx) => {
         const card = document.createElement("div");
         card.className= "card";
       
         card.innerHTML = `
        
             <h4>${elem.name}</h4>
             <P>${elem.city}</P>
             <button onClick = "deleteCard(event,'${elem.email}')">delete</button>
        
         `;
         root.appendChild(card);
     });
 };

 const deleteCard = (e, elemEmail) => {

      console.log(e.target.parentElement);
      e.target.remove();
      e.target.parentElement.remove();
      console.log(e,idx);
      data.splice[idx,1];
      showCards(data);
     const index = data.findIndex((elem) => elem.email == elemId);
     data.splice(index,1);
     showCards(data);
 };

 const handleSelect = (e) => {
     const selectedCity = e.target.value;
     const newData = data.filter((elem) => {
         if(elem.city === selectedCity) return true;
         return false;
     });
     showCards(newData);
 };
 showCards(data);


const handleFormSubmit = (e) => {
    // console.log(e);
    // e.preventDefault();
    // console.log(e);
    // console.log(e.target.email.value);
    // console.log(e.target[0].value);
    // console.log(e.target.fullName.value);
    // console.log(e.target[1].value);
    // console.log(e.target.city.value);
    // console.log(e.target[2].value);
    
    e.preventDefault();

    const isEmailExists = data.some((elem) => {
        return elem.email === e.target.email.value;
    });
    
    if(isEmailExists){
        alert("email already exists");
        return;
    }
    
    const newElem = {
        name : e.target.fullName.value,
        name : e.target.email.value,
        name : e.target.city.value,
    };

    data.push(newElem);
    showCards(data);
};


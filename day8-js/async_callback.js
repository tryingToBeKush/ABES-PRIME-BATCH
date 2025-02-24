// console.log("start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// };

// const handleCall = () => {
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };

// setTimeout(handleCall,0); // time in milliseconds
// // document.querySelector("body").addEventListener("click", handleCall);
// console.log("end");
// console.log("A");

// const handleCall = () => {
//     console.log("H");
// };
// setTimeout(() => {
//     console.log("N");

//     setTimeout(() => {
//         console.log("P");
//     },0);

//     handleCall();

//     console.log("B");
// }, 5000);

// console.log("C");

//
/* hyderabad : take user credentials and do the payment via wallet
// noida: make the payment from the wallet by doing required choice
// banglore : to t0 handle these two teams and implement wallet fcuntionality
    --> const userId = handleUser()
    --> if(userId){
     const resp = handlePayment(userId);
     console.log(resp);   
    }else{
        console.log("invalid details");
    }
    --> const resp = handlePayment(userId)
    --> console.log(resp);
// using Callbacks

    -->const resp = handleUser(handlePayment)
                    // what is the team calls handlePayment 2 times?
                    // or even with wrong credentials?
                    //or never calls it?
    
    -->console.log(resp)
   
   using promise
   -->const resp = handleUser() --> return a promise
   --> THEN {
        const resp = handlePayment(userId)
        console.log(resp)
    } 
   CATCH{
        console.log("invalid details"); 
   }
   

   PROMISES: fetch()
    */

const getData = (e) => {
  const profile = e.target.value;
  const pr = fetch("https://api.github.com/users/${profile}");
  console.log(pr);
  pr.then((a) => {
    console.log("a", a);
    const pr2 = a.json();

    pr2.then((data) => {
      // console.log("data",data);
      showUI(data);
    });
  }).catch((b) => {
    console.log("b", b);
  });
};

//    console.log(res);
// getData();
function showUI(data) {
  //responsible for creating a visualization
  console.log("data : ", data);
  const { avatar_url, login, html_url } = data;
  const card = document.getElementById("card");
  card.innerHTML = `
        <h4>${login_url.toUpperCase()}</h4>
        <img src = '${avatar_url}' alt='avatar'>
        <a href = ${html_url}>View profile </a>
    `;
}

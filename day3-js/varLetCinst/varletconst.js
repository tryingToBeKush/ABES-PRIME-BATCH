// const temp = () =>{
//     if(true){
//         var username = "raj";
//     }
//     console.log(username);
// };
// temp();
// console.log(username);

const sumMode10 = (a,b) => {
const ans = (a+b) % 10;
    console.log(ans);
    
    const printPretty = (txt) => {
        console.log("-----", txt, '----');
    };   
    
    printPretty(ans);
};

sumMode10(10,34);

console.log("end");


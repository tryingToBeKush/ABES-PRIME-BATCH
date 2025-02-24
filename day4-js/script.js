//two seperate functions


// const sum = (a,b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("-------");
//     console.log(txt);
//     console.log("------");
// };

// // const res = sum(20,30);
// printPretty(sum(20,30));

// const sum = (a,b,c) => {
//     //higher order function
//     const ans = a + b;
//     // return ans;
//     c(ans);
// };

// const printPretty = (txt) => {
//     //callback function
//     console.log("-------");
//     console.log(txt);
//     console.log("------");
// };

// // const res = sum(20,30);
// // printPretty callback funtion 
// sum(20,30,printPretty);

//FOREACH

//Object.values(obj)
//Object.keys(obj)
//Object.entries(obj)

//-----------------------------
// const getMetaData = () => {
//     const name = prompt("please enter your name");
//     console.log("hello",name);
//     const numOfSubText = prompt("Please enter the namr of subject");
//     const numOfSub = parseInt(numOfSubText); //parseFloat(),number()
//     return numOfSub;
// };

// const getSubjects = (num) => {
//     const record = {}; //mutability
//     for(let i=0;i<num;i++){
//         const subName = prompt(`Please enter the name of subject ${i}`);
//         const marks = Number(prompt(`Please enter the marks for ${subName}`));
//         record[subName] = marks;
//     }
//     console.log(record);
// };
// const getPercentage = (obj) => {
//     const marks = Object.values(obj);
//     const totalMarks = 0;
//     const totalSubjects = 0;
//     marks.forEach((a) => {
//         totalMarks += a;
//         totalSubjects++;
//     });
//     const percentage = totalMarks/totalSubjects;
//     return percentage;
// };
// const getHighestScoringSubject = (obj) => {
//     const marks = Object.entries(obj);
//     let maxScore = 0;
//     let maxScoreSub = "";
//     marks.forEach((a) => {
//         const subName = a[0];
//         const subMarks = a[1];
//         if(subMarks >= maxScore){
//             maxScore = subMarks;
//             maxScoreSub = subName;
//         }
//     });
//     console.log(maxScore);  
// };

// const getGrades = (percentage) => {
//     const grades = {
//         [60, "B"],
//         [70, "B+"],
//         [80, 'A'],
//         [90 , 'A+'],
//     };
//     let grade = "F";

//     grades.forEach((arr) => {
//         if(arr[0] <= percentage){
//             grade = arr[1];
//         }
//     });

//     console.log(grade);
// }



// // const num = getMetaData();
// // const record = getSubjects(num);

// const record = {
//     maths : 30,
//     english : 10,
//     hindi : 20,
// };

// const percentage = getPercentage(record);
// console.log(percentage);



//forEach vs Map

// const arr = [10,20,30];

// const newArray = [];

// arr.forEach((a) => {
//     newArray.push(a*2);
// });

// const newArray = arr.map((a) => {
//     return a*2;
// })

// console.log(newArray);



// const arr = [10,20,30];
// //# with default value
// arr.reduce((acc,elem,idx,c) => {
//     return acc;
// },0);
// // #without default value
// arr.reduce((acc,elem,idx,c) => {
//     return acc;
// });


// const arr = [10,20,30];

// const newArray = arr.reduce((acc,elem) => {
//     acc.push(elem*2);
//     return acc;
// },[]);

// console.log(newArray);
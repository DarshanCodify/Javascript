// console.log("darshan")

// let learn the variables var,let,const
// var-> this is es6 used upto 2015 currently not using 

// var name = "darshan";
//  console.log(name);
// var name ="akash";
// console.log(name);

// let number = 123;
// console.log(number);

// const -> it can't reassign the values again

// primitive datatype->number,string,null,boolean,undefined
// const name = "darsh";
// const age =18;
// const brother = false;
// const abc = null;
// let a;
// console.log(typeof a);

//Reference datatype
// const person ={
//     firstname :"john",
//     age : 30,
// };
// console.log(typeof person)

// datatype -> type conversion from integer to the string and string to the numbers float etc and also parseint(tofixed)
// type coehension
// const val1 = 5;
// const val2 = 6;
// const sum = val1+val2;
// console.log(sum);

// starting with the string and stringmethods->concat,escaping,length,indexof,substring,changecase,append,slice,split,includes

// numbers and numbermethods
// const val1 = 100;
// const val2 = 50;
// let val = val1+val2;
// val =Math.PI;
// val =Math.ceil(2.4);
// val =Math.floor(Math.random()*20);
// console.log(val);

// stings template->length of the string,pushing the element to the array->push in thee end of the aray
// unshift->adding the elements tto the front the array.pop->removing the elements(end) in the array
// shift->removing the elements(front)in the aray

// slicing-> numbers.slice(1,2)removing the value of the array elements ,reverse the array,concating,sort the elements in the array
// sorting the elements in the asc x-y; for the desc y-x;

// template literals
// const name ="darshan";
// const age = 20;
// const city = "banglore";

// html = `
// <ul>
// <li>name:${name}</li>
// <li>age:${age}</li>
// <li>cit:${city}</li>
// </ul>
// `;
// document.body.innerHTML = Html;

// comparsion and conditional
// const id= 101;

// if (id == 100){
//     console.log("yes the number is 100");
// }else{
//     console.log("no");
// }
// Logical 
// const age = 11;

// if (age>0 && age<12){
//     console.log("he is child");
// }else if (age>18 && age<50){
//     console.log("he is infrant");
// }else{
//     console.log("he is adult")
// }

// lops in the javascript
// for (let i=0; i<2; i++){
//     console.log(`name `);
// }
// while
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// do while loop
// let i =10;
// do{
//     i++;
//     console.log(i);
// }while(i<10);
// for in loop
// const name ={firstname:"darsh",age:20}

// for(x in name){
//     console.log(name[x]);
// }

// function declaration and expression
// function greet(){
//     console.log("darshan");
// }
// greet();

// switch cases
// const color= "yellow";

// switch(color){
//     case "red":
//         console.log("it is red");
//         break;
//     case"blue":
//         console.log("it is blue");
//         break;
//     default:
//         console.log("it not a color")
// }

// const dayofWeek = new Date.getDay();
// let day;

// switch(dayofWeek){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
// }

// scopes -> global and local
// for(let i=0; i<5; i++){
   
// }
//  console.log(i);

// going to the DOM 
// let val;
// val = document;  ->it will show the document present in the html code(document.all)-it will show all the document present in the code
// val=document.forms; val=document.forms[0]; val =document.forms[0].id;
// val=document.head; val=document.links;
// console.log(val);

// it will tell the code of documenets inthe html it can redirect to the console.

// single element selector
// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").classname);-it will show the classname
// taskTitle.style.backgroundColor="black";
// taskTitle.style.color="white";
// taskTitle.textContent="carrent"; you can use innertext & innerhtml -this is for changing the the sentence in the webpage without editing the html

// document.querySelector
// console.log(document.querySelector(".card-title"));
// document.querySelector("li").style.color="red"; this is tell the the first list item is red
// document.querySelector("li:last-child").style.color="blue";this is tell the last element is blue
// document.querySelector("li:nth-child(2)").style.color="red";this is tell the midlle or 2 elemt color
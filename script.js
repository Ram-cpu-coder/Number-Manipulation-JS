
console.log("Hello World");

//number manipulation


//if there is only numbers in the string 
const num1 = "234";
const val1 = +num1;

console.log(typeof val1, val1);


// if there is a character in the string and we want to change it to number type
const num = "23s890s";
const val = +num;

console.log(typeof val, val);


//but there is other way to do it more effectively 
//parseInt() 
// but it wont work on the decimal numbers 

const num2 = "23sa";
const val2 = parseInt(num2);

console.log(typeof val2, val2);


//for the decimal numbers we use parseFloat()

const num3 = "234.23we";
const val3  = parseFloat(num3);

console.log(typeof val3, val3);


//similar properties of parseInt()
const num4 = "se23.432sdf";
const val4 = parseFloat(num4);
isNaN(val4);

console.log(typeof val4, val4, isNaN(val4));


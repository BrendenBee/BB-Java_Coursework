console.log("Test")

// let is a keyword that tells JS we are setting up a variable
// x is the "name" of he varaible, sometimes referred to as a reference
// = is known asthe assignment operator and lets you set values
// 5 is the "literal" value or what "x" represents

let x = 5;

// when you set up a variable that is known as a declaration

let y;

// when you set a value that is known as initialization

y = 3;

// below is a template literal that shows the value of x
console.log(`The value x is ${x}`)

//below is a concatanation that does the same thing
console.log("the value of y is" + y)
console.log(y)

const MY_CONST = 7;

console.log(MY_CONST)

let MyString = "This is my string value";
console.log(MyString)

let myDecimalValue = 0.45;
let myBoolean = true;
let myOtherBoolean = false;

Let myVariable = "abc";
console.log (typeof MyVariable)

myVariable = 1
console.log(typeof myVariable)
let coercedVariable = 7+7+7
console.log(`the value of coercedVarible is ${coercedVarible}`);
coercedVariable = 7+7+"7"
console.log(`the value of coercedVarible is ${coercedVarible}`);
coercedVariable = "7"+7+7
console.log(`the value of coercedVarible is ${coercedVarible}`);

let conditional = true;
if (conditional {
    console.log("The conditional was true");
} else {
    console.log("The conditional was false");
}

let numberConditional = 5;

if (numberConditional === 5) {
    console.log("The number is equal to five");
} else if (numberConditional > 3){
    console.log("The number is at least bigger than three");

} else if (numberConditional < 10) { console.log("The number is less than ten");
}
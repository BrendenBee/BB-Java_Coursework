//displays outputs
console.log("");

//This is an empty array
let x = [];

//Displays the array
console.log(x);

let teachers = ["Shane", "Zack"];

// Arrays start at 0, so the array for this is outputting Shane
// x = [0 , 1 , 2 , etc]
console.log(teacher[0]);

let x = 1;

//Outputs Zack
console.log(teachers[x]);

//Gives 2 since its the length of the array (0 , 1) so 2 items.
console.log(teachers.length);

//Outputs last one, needs subtract since there isnt 2 (which is total), but output the first one (2-1 = output 1 which is defined)
console.log(teacher[teachers.length - 1]);

//Adds something to end of the array
teachers.push("Josh");

//Outputs and adds
console.log(teachers.push("Josh"));

//pop removes last item from array

console.log(teachers.pop());

//not oly defines new variable but also does a function which affects the array moving forward
let oldteachers = teachers.pop();

console.log("The old teachers were:" + oldteachers);

//Adds to first position in the array
teachers.unshift("New guy");

//Removes first array value
teachers.shift();

//Adds a position to the array, but missing values in the array (like 2, 3, and 4) are empty and return undefined
//By adding a 5 position to a 0, 1 you need 3 more positions in between 1 and 5
teachers[5] = "Number Five";

//returns undefined
console.log("The fourth teacher is" + teachers[4]);

//Replaces the 1 position of the array
teachers[1] = "Replacement";

//Says where in the array Shane is
//As shift and unshit happens everyone's position in the array changes
console.log(teachers.indexOf("Shane"));

let Shanespot = teachers.indexOf("Shane");

//In this case teacherslice is a new array that is built out of the items between the inedxes of 0 and 3 of teachers
//Doesnt change original array but it is a mutating function
let teacherSlice = teachers.slice(0, 3);
console.log("Teacher slice is: " + teacherSlice);

//Changes the original array ia mutation
teachers.splice(0, 3, "Josh");

//Use i for index
//need to do -1 for the index if <= etc, so i =< teachers.length -1;
//provides each thing in the array
for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

//Check if thing at the spot we're looking at is this value
//if it is go up one in value
let numberofShanes = 0;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Shane") {
    numberofShanes++;
  }
}

let indexofShanes = [];
let numberofShanes = 0;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Shane") {
    numberofShanes++;
    indexofShanes.push(i);
  }
}

//this wants a function
//feeds it item and index for each item on the array list
//skips any undefined variables
//regular for loop will show undefined
//Can do != (not equal) undefined in the for loop to ignore undefined
teachers.forEach(function (item, index){
    console.log(item + "is at index ") + index);
});

//return value of string representing all values in the array due to parenthesis. Logs result

console.log(teachers.toString());

//logs function not result of the function
console.log(teachers.toString); 

//Joined them together into one string using the defined separater
console.group(teachers.join("&"));

let numbers = [4, 7, 2, 3];

//Sorts in natural ordering, which is alphabetical or numerical 
numbers.sort();

//opposite order, undefined at front. All these things are built into the array class
numbers.reverse();

//Data in Objects are not ordered
//Curly brackets is code block
//Key and value pairs, can be just about anything
let course = {
    name: "Javascript Fundamentals",
    awesome: true,
};

//Access course object and awesome property of it
//Is considered a boolean literal
//use the . to access property
console.log(course.awesome);

console.log("Course is awesome? ") + course.awesome);

let course = {
    name: "Javascript Fundamentals",
    awesome: true,
    teacherList: teachers,
};
console.log(course.teacherList);

//object properties are defined with colons not equals
let school = {
    name: "the place we go",
    courses: [course],
};
//these both print the same thing bu the bracket allows a variable to be put in
console.log(school.courses);
console.log(school["courses"]);
//looking at value of x and geting property
let x = "courses";
console.log(school.courses);
console.log(school["x"]);

//school.x doesnt work beause school doesnt have property x
console.log(school.x);

//Can nest multiple ones into each other
let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		}
	]
};

console.log(course.students[0].computer.OS);

course2.name = "New Course Name";
//Can be mutated, updated, or deleted
course2.time = "12:00";
deleted course2.time;
//undefined
console.log(course2.time);

//JSON you have to specify string

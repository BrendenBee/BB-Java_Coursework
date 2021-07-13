//Get a single node
let username = document.getElementById("username");

console.log("Test");

username.value = "This is the new username!";

//Get all inputs
let inputs = document.getElementsByTagName("input");
// let inError = document.getElementsByClassName("error");
//Defined later in this code
let inError = document.querySelectorAll("input.error");

console.log("Number of inputs: " + inputs.length); //2
console.log("Number of errors: " + inError.length); //1

//takes css selector as argument, takes functionality from other
// DOM selectors
//for query selector and query selecor all

//Get all inputs
let firstButton = document.querySelector("button");

console.log(firstButton); //single button node
console.log(inError); //Node list of inputs with class 'error'

let links = document.querySelectorAll("a");
let listItems = document.querySelector("ul").children;
console.log(listItems);

let selectedItem = document.querySelector("li.selected");
//dot is always a class

let first = selectedItem.previousElementSibling;
let last = selectedItem.nextElementSibling;
let list = selectedItem.parentElement;
let header = selectedItem.parentElement.parentElement;
let section = selectedItem.parentElement.parentElement.nextElementSibling;
//selected previous sibling is what element comes before this one for sibling elements

console.log("Selected item:");
console.log(selectedItem);

console.log("Selected header");
console.log(header);

//Get all inputs
let myDiv = document.querySelector("div");
let myA = document.querySelector("a");
console.log("The interHTML of the A: ")
console.log(myA.innerHTML); //"click me"
console.log("The innterHTML of the div: ")
console.log(myDiv.innerHTML); //'<a href="#">Click me</a>'

// myA.innerHTML = "This has been updated";

//adding html stuff inside of an element
//aka sledgehammer for manually putting in html code
myA.innerHTML = "<h2>THIS IS HUGE</>";

//Can also

myA.innerText = "Your user name: ${username.value}";


let googleLink = document.getElementById("googleLink");
console.log("The link: ")
// console.log(googleLink);

googleLink.name = "new link name";

//opens in new tab
googleLink.target = "_blank";

//.first for first class
//removes item from the list
document.querySelector(".first").remove();

//can create stuff in list as well

let newLi = document.createElement("Li");
newLi.innerHTML = "Item 2";
let todoList = document.getElementById("todoList");
todoList.appendChild(newLi);


//manipulate the document, make new html element, add to the list
let button = document.getElementById("button");
function addItem() {
 let newItem = document.createElement("li");
 newItem.innerHTML = "New Todo";
 todoList.appendChild(newItem);
}

button.addEventListener("click" , addItem);

let el = document.getElementById('myEl');
el.addEventListener('click', function(event){
	alert('clicked!');
})

//Combine with DOM editing
el.addEventListener('mouseover', function(event){
	el.innerHTML = 'I got mouseovered!';
})

el.addEventListener('mouseout', function(event){
	el.innerHTML = 'Not mouseovered any more!';
})

document.querySelector('.outer').addEventListener('click', function(e){
    // e represents the event (element that has been clicked)
console.log(e.target, e.currentTarget);
//inner, outer
})





// //Works!
// let linkCount = links.length;
// let firstLink = links[0];

// //Doesn't work!
// links.forEach(function(link){
// 	//do something with link
// });

// let links = document.querySelectorAll('a');
// let arrayOfLinks = Array.from(links);

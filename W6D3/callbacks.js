console.log("Script is loaded");

function calculator (operation,x,y) {

    return operation (x,y);
}

function add(a,b){
    return a+b;

}

function multiply(a,b){

    return a*b;
}

let result = calculator(add, add(1,2), multiply (3,4));
console.log(result);

let numbers = [1, 2, 4, 7, 3, 5, 6];
//sort expects you to provide a function to sort with
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log("Starting timer")

setTimeout(function afterTwoSeconds() {
  console.log("Two seconds have passed")
  //time is in ms
}, 2000)

console.log("This happens after the timeout function")

setInterval(timestamp, 1000);

let time = document.getElementById("time");

function timestamp() {
  let d = new Date();
  time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

}



function carDisplayer(some) {
    document.getElementById("carZone").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    setTimeout(() => {
        req.onload = function() {
            if (req.status == 200) {
              myCallback(this.responseText);
            } else {
              myCallback("Error: " + req.status);
            }
          }
          req.send();
        }, 2000);
    }
  
  getFile(carDisplayer); 




//Callback example

  function ajaxCall() {
let ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function (){
    if (ajaxRequest.readyState == XMLHttpRequest.DONE){
        if (ajaxRequest.status == 200) {
            let myDiv = document.getElementById("requestDiv");
            let newDiv = document.createElement("div");
            newDiv.innerHTML = ajaxRequest.responseText;
            myDiv.appendChild(newDiv);
        } else if (ajaxRequest.status == 400){
        console.log("There was a 400 error")

        } else {
            console.log("There was an error, code: " + ajaxRequest.status);        }
    }
};
ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
ajaxRequest.send();
  }

  function clearMain() {
      document.getElementById("requestDiv").innerHTML = "";
  }


// document.querySelector('form').onsubmit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }



//  let form = document.querySelector('form')
// form.onsubmit = function (submitEvent) {
//     let name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function (err, response, body) {
//     let statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }

// var formUploader = require('formuploader')

// let form = document.querySelector("form");
// form.addEventListener("click", (e) => {e.preventDefault()});
// document.querySelector('form').onsubmit = formUploader.submit



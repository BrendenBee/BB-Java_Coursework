


// let userInputBill = 10;

// Gets the variable set by the text box
// let totalBill = function() {
//     let userInput = document.getElementById('userInputBill').value;
//     //To make sure we have the correct value
//     console.log(userInput);
//     return userInput;
// }  
let totalBill;
function totalBillFunc() {
    totalBill = document.getElementById('userInputBill').value;
    console.log(totalBill);
    return totalBill;
};

let subButton = document.getElementById('subButton');
subButton.addEventListener('click', totalBillFunc, false);

let totalBill;
function totalBillFunc() {
    totalBill = document.getElementById('userInputBill').value;
    console.log(totalBill);
    return totalBill;
};


// console.log(totalBill());

// let calculator = {
//     add: function(a,b) {return a+b;
//     },
// };
// function (a,b){console.log("I don't exist!")};
// //point is cleaner code scope management etc
// console.log(calculator.add(1,2));

// let totalBill = {
//     input: function(userInput) {
//         userInput = document.getElementById('userInputBill').value;
//         return userInput;
//     }

// }

// console.log(totalBill.input(userInputBill));





function testFunc() {
    let newValue = totalBill * 1.5;
    console.log(newValue);
    return newValue;
};

// let subButton2 = document.getElementById('subButton2');
// subButton2.addEventListener('click', testFunc, false);








// function calculateTip (){

//     let totalBill = document.getElementById('userInputTotalBill').value
//     let partySize = document.getElementById('userInputPartySize').value
//     let serviceQuality = document.getElementById('userInputServiceQuality').value
// }





// console.log(totalBill.userInputBill);


// let numberOfGuests = function() {
//     let userInput = document.getElementById('userInputGuests').value;
//     //To make sure we have the correct value
//     console.log(userInputGuests);
//}
// let numberOfGuests = function() {
//     let userInput = document.getElementById('userInputGuests').value;
//     //To make sure we have the correct value
//     console.log(userInputGuests);
// }  




// let qualityOfService = function() {
//     let userInput = document.getElementById('userInputService').value;
//     //To make sure we have the correct value
//     console.log(userInputService);
// }  






// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', getInput, false);
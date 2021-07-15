let totalBill;
function totalBillFunc() {
    totalBill = document.getElementById('userInputBill').value;
    console.log(totalBill);
    return totalBill;
};

// let subButton = document.getElementById('subButton');
// subButton.addEventListener('click', totalBillFunc, false);


let orderQuality;
function OrderQualityFunc() {
    

    if (document.getElementById('userInputQualityFair').checked === true) {
        orderQuality = 1.10;
    } else if (document.getElementById('userInputQualityGood').checked === true) {
        orderQuality = 1.15;  
    } else if (document.getElementById('userInputQualityAwesome').checked === true) {
        orderQuality = 1.20;
    } else {
        orderQuality = 1.25;

    };
};

    // this disables the on checked boxes (should have used radio instead...)
$(':checkbox').change(function(){
    // "this" is the current checkbox
    $(':checkbox').not(this).prop('disabled', this.checked);
});

// };
// function OrderQualityGoodFunc() {
//     OrderQuality = document.getElementById('userInputQualityGood').value;
//     OrderQuality = 1.10;
//     console.log(userInputQuality);
//     return userInputQuality;
// };
// function OrderQualityAwesomeFunc() {
//     OrderQuality = document.getElementById('userInputQualityAwesome').value;
//     OrderQuality = 1.15;
//     console.log(userInputQuality);
//     return userInputQuality;
// };
// function OrderQualityOutstandingFunc() {
//     OrderQuality = document.getElementById('userInputQualityOutstandingOutstandng').value;
//     OrderQuality = 1.20;
//     console.log(userInputQuality);
//     return userInputQuality;
// };

let partySize;
function partySizeFunc() {
    partySize = document.getElementById('userInputSize').value;
    console.log(partySize);
    return partySize;
};
let totalAfterTip;
let totalTip;



     function calculateTotalFunc() {
        totalAfterTip = (totalBill * orderQuality) /  partySize;
        totalAfterTip = Math.round(totalAfterTip * 100) / 100;
        totalAfterTip = totalAfterTip.toFixed(2);
        console.log(orderQuality);
        console.log(totalAfterTip);
        console.log(totalBill);
        console.log(partySize);
        document.getElementById("totalBillWithTip").placeholder = totalAfterTip;
        return totalAfterTip;
    }
    
    
    
    function totalTipFunc() {
        totalTip = (orderQuality * totalBill - totalBill);
        totalAfterTip = Math.round(totalAfterTip * 100) / 100;
        totalTip = totalTip.toFixed(2);
        console.log(totalTip);
        document.getElementById("totalTip").placeholder = totalTip;
        return totalTip;
    }



















// let userInputBill = 10;

// Gets the variable set by the text box
// let totalBill = function() {
//     let userInput = document.getElementById('userInputBill').value;
//     //To make sure we have the correct value
//     console.log(userInput);
//     return userInput;
// }  
// let totalBill;
// function totalBillFunc() {
//     totalBill = document.getElementById('userInputBill').value;
//     console.log(totalBill);
//     return totalBill;
// };

// let subButton = document.getElementById('subButton');
// subButton.addEventListener('click', totalBillFunc, false);

// let totalBill;
// function totalBillFunc() {
//     totalBill = document.getElementById('userInputBill').value;
//     console.log(totalBill);
//     return totalBill;
// };

// //new line
// // console.log(totalBill());

// // let calculator = {
// //     add: function(a,b) {return a+b;
// //     },
// // };
// // function (a,b){console.log("I don't exist!")};
// // //point is cleaner code scope management etc
// // console.log(calculator.add(1,2));

// // let totalBill = {
// //     input: function(userInput) {
// //         userInput = document.getElementById('userInputBill').value;
// //         return userInput;
// //     }

// // }

// // console.log(totalBill.input(userInputBill));





// function testFunc() {
//     let newValue = totalBill * 1.5;
//     console.log(newValue);
//     return newValue;
// };

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

// test line 2


// let qualityOfService = function() {
//     let userInput = document.getElementById('userInputService').value;
//     //To make sure we have the correct value
//     console.log(userInputService);
// }  






// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', getInput, false)
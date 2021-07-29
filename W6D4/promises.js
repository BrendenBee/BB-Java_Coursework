const promiseA = new Promise((resolve, reject) => {
  let x = 12; // some complicated action
  //Check and see if the result meets our criteria
  if (x > 10) {
      //If it doesnt then resolve
    resolve(x);
    //If not then reject
  } else {
    reject(x);
  }
});

// function resolutionFunc(data) {
//   console.log("Resolved, her is the data: ");
//   console.log(data);
// }

// function rejectionFunc(err) {
//   console.log("Rejected: " + err);
// }

// promiseA.then(
//   (val) => console.log("asynchronous logging has val: " + val),
//   (err) => console.log("Error: " + err)
// );

// console.log("This is the immediate log");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777


promiseA
.then(
    (val) => console.log("asynchronous logging has val: " + val)
)
.catch((err) => {
    console.log("Error: " + err);
});
console.log("This is the immediate log");

async function myFunc(){
    return 1;
}


myFunc().then(alert);

async function timedAction() {

    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve ("Done"),1000);
    });


let result = await promise; // pauses and waits for return value
// let result = promise; //doesnt pause and doesnt get return value
alert(result);


}

timedAction();
// let url = "https://www.google.com";
// let options = "GET";
// let fetchResult = fetch(url, [options]);

let url = "https://www.google.com";
let options = "GET";

async function getStuffFromWeb() {
let response = await fetch(url);
if(response.ok){
    let json = await response.json();
} else {P
alert("HTTP-Error: " + response.status)
}
}


// let fetchResult = fetch(url, [options]);

fetch('https://javascript.info/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(async function(response) {
       setTimeout(() =>{}, 2000);
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", "isAdmin": true}
});


//One way to handle promises - with promise chaining
fetch('https://javascript.info/article/promise-chaining/user.json')
.then((response) => response.json())
.then((user) => fetch (`https://api.github.com/users/${user.name}`))
.then((response) => response.json())
.then ((githubUser) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
});

//better way to handle this is with async/await

async function showAvatar() {

    // read our JSON
    let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  }
  
  showAvatar();
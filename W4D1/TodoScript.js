console.dir(document);

let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.style.border = "solid 3px #000000";
headerTitle.style.backgroundColor = "Cyan"
headerTitle.style.maxWidth = "300px";

//let list = document.getElementsByClassName("list-group-item");
//console.log(list);
// list.style.backgroundColor = "Orange";

// for (let i = 0; i < list.length; i++) {
//     list[i].style.backgroundColor = "Orange";
// };

let li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "Orange";
    li[i].style.border = "solid 1px #000000";
};

///Can use any css selectors like jquery
// let header = document.querySelector("");




// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Submit" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    //Forces a text input
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    //I believe this returns the text box to empty/no text
    document.getElementById("myInput").value = "";

  //code below adds x to new item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    //ability to remove item from the list
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        
      }
    }
    // Doesnt add new style to new list item
    // for (let i = 0; i < li.length; i++) {
    //   li[i].style.backgroundColor = "Orange";
    //   li[i].style.border = "solid 1px #000000";
    // }
  }

// let input = document.querySelector("input");
// let submit = document.querySelector("submit");

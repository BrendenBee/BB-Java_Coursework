let header = document.querySelector("header");
console.log("Header: " + header);

let sections = document.querySelectorAll("section");
console.log("Sections: ");
console.log(sections);
let currentSection = document.querySelector("section.current");
console.log("The current section: ");
console.log(currentSection);
let afterCurrent = currentSection.nextElementSibling;
console.log("After the current section: ");
console.log(afterCurrent);

let myH2 = currentSection.previousElementSibling.firstElementChild;
console.log("My h2: ");
console.log(myH2);

let myDiv = document.querySelector("h2.highlight").parentElement.parentElement;
console.log("My div: ");
console.log(myDiv);

//from list of h2 we build an array of those

//now that we have an array we use the map function
//the function feeds each element into the function
//and returns thatElement.parentElement

let sectionsWithH2 = Array.from(document.querySelectorAll("section h2")).map(
  function (headline) {
    return headline.parentElement;
  }
);
console.log("Sections with H2s ");
console.log(sectionsWithH2);


//objects created from class are what we are going to use
//the class is a template
//class helps generate the objects for us 
// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }
// }

//"this" refers to objects or function that is calling this function

//this.name refers to name property in the class here
//changing property to something else
//changing name to property of this class and sets it to this parameter
//f2 rename symbol

class Fruit {
    fruitName = "fruit";
    howNutritious = "unknown";
    constructor(name) {
        this.fruitName = name;
        //calls the function so its not undefined
        this.calculateNutrition();
    }
     changeName = function (newName) {
         this.fruitName = newName;
    };
    
    speak = function() {
        console.log("Hey my name is: " + this.fruitName);
    };
calculateNutrition = function(){
    if(this.fruitName === "Apple") {
        this.howNutritious = "very";
    } else if (this.fruitName === "Banana") {
        this.howNutritious = "pretty";
    } else {
        this.howNutritious = "not very";
    }
};

//property followed up by function
    sayNutrition = function() {
        console.log("This " + this.fruitName + " is " + this.howNutritious + " nutritious")
    };
}





//these objects are called instances of this class
//the class is a template
//class helps generate the objects for us 

let apple = new Fruit("Apple");
console.log("The first fruit is named: " + apple.fruitName);

let banana = new Fruit("Banana");
console.log("The second fruit is named: " + banana.fruitName);

let candy = new Fruit("Candy");

//Now we can change the class and it gives us all the changes we make to all of the objects
//by making function part of the class we dont have to repeat it
apple.speak();

apple.sayNutrition();
banana.sayNutrition();
candy.sayNutrition();

class Animal {
    petName = "";
    legs = 0;
    brain = "regular";
    speak = function() {
        console.log("I'm an animal!");
    };
    //tostring is already defined but we change how it works
    //known as polymorphism
    toString = function () {
        return "This is an animal!";
    };
    setName = function (newName) {
        this.petName = newName
    };
}



//because animal is subclass of object class ther is sitll to.string d/t inhritance
//constructor for the class animal
let dog = new Animal();
dog.setName("Rufus");
dog.speak();
console.log(dog.toString());

//string concatination
//calls toString on this while concatinating it
console.log("" + dog);

//Class declaration doesnt need semi colon
class Vehicle {
    //internal properties dont want user to mess around with it
    milesDrivenSinceLastFill = 1;
    gallonsFilledSinceLastFill = 1;
    //since defined as part of class not global since its defined within
    mpg = 0;
    //statement requires semi colon
    fillTank(milesDriven, gallonsFilled) {
        this.milesDrivenSinceLastFill = milesDriven;
        this.gallonsFilledSinceLastFill = gallonsFilled;
        
    };
    calculateMPG = function (milesDriven, gallonsFilled) {
        this.mpg = milesDriven / gallonsFilled;
    };
    getMPG = function (){
        this.calculateMPG(this.milesDrivenSinceLastFill, this.gallonsFilledSinceLastFill);
        return history.mpg;
    };
}


let myCar = new Vehicle();
myCar.fillTank(100,10);
console.log("My curent MPG: " + myCar.getMPG());

//Modifies the Vehicle class to specify subclass Prius
class Prius extends Vehicle {
    // calculateMPG = function (milesDriven, gallonsFilled) {
    //     this.mpg = (milesDriven*2) / gallonsFilled;
    // }
}

let myPrius = new Prius();
myPrius.fillTank(100,10);
myPrius.gallonsFilledSinceLastFill = 10;
myPrius.milesDrivenSinceLastFill =5;
console.log("My curent MPG: " + myPrius.getMPG());

//private access modifier not available outside of function

//book is effectively a class here, setting properties etc.
//can also set a constructor inside of it
//easier to set to class and go from there
// function Book(bookTitle)  {
//     //sets property of this function
//     //functions are effectively objects in javascript
//     this.title = bookTitle;
//     this.pages = 0;
//     function toString() {
// this.title = bookTitle;
//     }
// }
//superclass is object here
class Book {
    constructor(bookTitle) {
        this.title = bookTitle;
        this.pages = 0;
    }
    //runs when book is called
    // same as saying myBook.toString();
    // toString = function () {
    //     //example of specific to.String return
    //     return this.title + ", pages " + this.pages;
    // };
    // Can also use alternate methods
    getTitle = function () {
        return this.title
    }
    getFullDescription = function () {
        return this.title + ", pages " + this.pages;
    }
}

//because to.String causes object object return we use polymorphism to override
//overriding is nice when planning on overriding toString object
//very common

//class names are capitalized and instance/object names are lowercase
//that is typical convention



let myBook = new Book("The story of Book");

//console.log(Book.prototype);
console.log(myBook);
console.log("" + myBook.toString());

//Example of object object, this is wh we override toString
console.log("My book is called " + myBook);

console.log("My book is called " + myBook.getTitle());
console.log("My book's full description " + myBook.getFullDescription());


//uses built in to.String function
//when making custom class polymophing to.String can specify
//how its done when converting to a string

//class uppercase, object lowercase
//pascal case starts with upper csae letter, camelcase starts with lower case
//constant start with uppercase, followed by underscore separating words
//const GRAVITY_CONSTANT = 1.3; 
let myArray = new Array(1,2,3,4);
console.log("My array: " + myArray)

getTitle = function () {
    return this.title
}
getFullDescription = function () {
    return this.title + ", pages " + this.pages;

    
}





//function delcaration - saying at base level this function exists, is hoisted
//all throughout the code
//function assignment is a little less powerful

//yes hoisted
myFunc()

//not hoisted
//newFunc();

//yes hoisted
function myFunc() {}

//not hoisted
let newFunc = function (){};

//nodeJS is runtime environment for javascript code
//browser provides javascript runtime
//node gets used a lot to un servers

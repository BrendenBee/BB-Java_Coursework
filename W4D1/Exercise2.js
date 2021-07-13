let list = document.getElementById("list");
let coffeeItem = list.firstElementChild.nextElementSibling;
console.log(coffeeItem);

coffeeItem.innerHTML = "Fair Trade Coffee";

let cheezeWiz = document.createElement("li");
cheezeWiz.innerHTML = "Cheeze Wiz";
list.appendChild(cheezeWiz);


let newList = ["protein powder" , "muscle milk" , "power bar"];

list.innerHTML = "";
newList.map (function (listItem) {
    let newItem = document.createElement("li");
    newItem.innerHTML = listItem;
    list.appendChild(newItem);
});

let muscleMilk = list.firstElementChild.nextElementSibling;
muscleMilk.classList += "imprtant";
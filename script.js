var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
]

var priceofJuice;
var priceofCookie;
var priceofShirt;
var priceofPen;
for (var i = 0; i < itemsArray.length; i++) {
    if (i == 0) {
        priceofJuice = itemsArray[i].price * itemsArray[i].quantity;
        console.log("price of juice =", priceofJuice);
    }
    else if (i == 1) {
        priceofCookie = itemsArray[i].price * itemsArray[i].quantity;
        console.log("price of cookie =", priceofCookie);
    }
    else if (i == 2) {
        priceofShirt = itemsArray[i].price * itemsArray[i].quantity;
        console.log("price of shirt =", priceofShirt);
    }
    else {
        priceofPen = itemsArray[i].price * itemsArray[i].quantity;
        console.log("price of pen =", priceofPen);
    }
}
var totalPrice = priceofCookie + priceofJuice + priceofShirt + priceofPen;
console.log("Total price is =", totalPrice);

var object = {
    name: "nouman",
    email: "noumanfatt@gmail.com",
    password: "123",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}
var objectCheck = ["age", "country", "firstName", "lastName"];
for (var i = 0; i < objectCheck.length; i++) {
    if (object.hasOwnProperty(objectCheck[i])) {
        console.log(objectCheck[i] + " exists in the object");
    }
    else {
        console.log(objectCheck[i] + " does not exist in the object");
    }
}

function Students(name, fatherName, age) {
    this.name = name;
    this.fatherName = fatherName;
    this.age = age;
}

var nouman = new Students("Nouman","Amin",20);
var usman = new Students("Usman","Ashraf",18);
var wasif = new Students("Wasif","Asif",19);
console.log(nouman,usman,wasif);
function Data(name, address, gender, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
var recordNo = localStorage.length + 1;
function insertRecord() {
    var profession = document.getElementById("profession").value;
    var education = document.getElementById("education").value;
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var gender;
    if (name.value == "" || address.value == "" || 
    (!document.getElementById("male").checked && !document.getElementById("female").checked)) {
        alert("Input all the values")
    }
    else {
        if (document.getElementById("male").checked) {
            gender = document.getElementById("male").value;
        }
        else {
            gender = document.getElementById("female").value;
        }
        var nameValue = name.value;
        var addressValue = address.value;
        var newUser = new Data(nameValue, addressValue, gender, education, profession)
        localStorage.setItem("Record No." + recordNo.toString(), JSON.stringify(newUser));
        alert("Your record has been inserted")
    }
}


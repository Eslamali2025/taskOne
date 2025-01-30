// 2-  Non Primitive Data Types or Referance Data Types
// 1- Function // Reusable code
// function funName() {
//     //  statement
//  }

// function getPrice(priceItem) {
//     console.log("Get Price", priceItem * 0.1);
// }
// getPrice(10); // Calling  & Invoking
// getPrice(100); // Calling  & Invoking
// getPrice(300); // Calling  & Invoking

// var test = "Hello" +"        " +10

// function getSum(num1=0, num2=0) { // void
//     console.log("is Result:", num1 + num2); //
//     return `is Result :  ${num1 + num2}`;
// }
// document.write(getSum(10))

// function getFinalPrice(itemPrice, dicount = 1) {
//     var tax = 0.1;
//     var priceWithTax = itemPrice * (1 + tax);
//     var priceWithDiscount = priceWithTax * dicount;
//     console.log(priceWithDiscount);
//     return `Total Price : ${priceWithDiscount}`;
// }
// console.log(getFinalPrice(2000, 0.5));

// document.write(getFinalPrice(2000, 0.5));

// -----------------------

// 2-object
var person = {
    name: "ahmed",
    age: 20,
    address: {
        city: "cairo",
        country: "egypt",
        street: "3325st - street",
    },
    0: "test",
    getFullAdress: function () {
        // console.log("Get Full Adress");
        return `${person.address.street} - ${person.address.city} - ${person.address.country}`;
    },
    // getFullAdress(){},
};
// console.log(person.name); // dot notation
// console.log(person[0]);
// console.log(person["name"]); // bracket notation
// person.demo = prompt("Enter Your Name");
// // person.age = 40
// ----------------------------
// 3- Array 
var arr = [10 , 20 , 30 , 40 , true , {} , [10,20 ,[30,40]]];
// console.log(arr[6][2][1]);
arr[0] = "Ahmed";
arr[7] = "Test"
arr[8] = "Test2"
arr[100] = "Test3"
console.log(arr);
console.log(parseInt("d10d50"));
console.log(Number("10"));


//  Frontend ==> API ==> Backend

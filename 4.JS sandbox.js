                           *****JavaScript*****
					  
					  1] Variable
//declare a variable
var score;
console.log(score);    // for output in console screen
document.write(score); // for output on web page

//declare a variable and initialize
var livesLeft = 3;
console.log(livesLeft);

//re-assign a value to our variable livesLeft
livesLeft = 2;
console.log(livesLeft);

//constants
const firstname = 'John';  // we can not change value of const variable
*********************************************************************
                              2]Number
var x = 1;
console.log(typeof x);

//fractional numbers
var y = 2.4;

//5.3 * 10^8
var z = 5.3e8;
console.log(z);

//max min in JS
var max = Number.MAX_VALUE;
console.log(max);
var min = Number.MIN_VALUE;
console.log(min);

//arithmetic operation
var a = 4 + 9;
console.log(a);

a = 3 * 4;
console.log(a);

a = y - x;
console.log(a);

console.log(12 / 4);

var b = 3;
//b = b + 2;
b += 2;
console.log(b);

//b += 1;
b ++;
console.log(b);

//b -= 1;
b --;
console.log(b);

//operator precedence
var c = 4 * (5 + 3);
console.log(c);

var d = ++ c;
console.log(c);
console.log(d);

var e = c ++;
console.log(c);
console.log(e);

//remainder operator
var f = 17 % 3;
console.log(f);//17 is 3 * 5 +2

//exponent operator
var g = 3 ** 4; //3^4: returns the base to the exponent power
console.log(g);

//Infinity
var h = Infinity;
console.log(h);
console.log(3/0);

//NaN
var i = 0/0;//no meaningful result
console.log(i);

//power method
var j = Math.pow(2, 53);
console.log(j);

//big number
var k = Math.pow(2, 2000);
console.log(k);

//parse a string and return an integer
var number = '3';
console.log(parseInt(number));
console.log(typeof parseInt(number));
console.log(parseInt('not a number'));
console.log(typeof parseInt('not a number'));
*****************************************************************
                       3]String
//string
var job = 'web developer';
var town = "London";

//escape the normal process and treat quotation marks as punctuation marks.
var greeting = 'Hello, I\'m glad to see you';

//special characters
//new line
var quote = "This is \n a new line";
console.log(quote);
//tab
quote = "Here is \t a tab";
console.log(quote);

//Concatenation
var firstname = 'Bill';
var lastname = 'Gates';
var fullname = firstname + " "  + lastname + ".";
console.log(fullname);


var s = 'apple';
//methods work with the primitive type and object type. Will be covered in detail later
console.log(s.length);
console.log(s.charAt(2));
console.log(s.indexOf('l'));
console.log(s.lastIndexOf('p'));	
*********************************************************************
                                4] Boolean
//Booleans
var x = 3;
var y = 5;
var z = x < y;
console.log(z);

//Logical Operators
z = (x < y) && (x > 0);
console.log(z);
z = false || true;
console.log(z);
z = !(x < 10);
console.log(z);

//Operator Precedence
z = false && true || true;//&& stronger
console.log(z);

//Unary Operator
z = x > 2 ? 'Pass' : 'Fail';
console.log(z);
**************************************************************************
                                5] Undefine and Null
// Undefine
var x;
console.log(x);
console.log(typeof x);

// null can be assigned as a value as a representation of no value
var y = null;
console.log(y);
console.log(typeof y);	
****************************************************************************	
                               6] Type conversion
var z = "1" + 5;
console.log(z);
console.log(typeof z);

z = "1" - 5;
console.log(z);
console.log(typeof z);

z = "one" * 2;
console.log(z);
console.log(typeof z);

z = 2 * null;
console.log(z);
console.log(typeof z);
******************************************************************************
                              7]Object introduction

//object = collection of properties
var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold"
}

console.log(myPhone);
console.log(myPhone.model);

//change property
myPhone.model = "Iphone 6";
console.log(myPhone);

//add new property
myPhone.storage = "64 Go";
console.log(myPhone);

//delete property
delete myPhone.storage;
console.log(myPhone);

//now let's do something interesting
var x = 1;
var y = x; //y stores value 1
x = 2;
console.log(y);

//now let's do that with object
var myOtherPhone = myPhone;
console.log(myOtherPhone);

//change myPhone
myPhone.color = "grey";
console.log(myPhone);
console.log(myOtherPhone);				
*************************************************************************
                           8] IF ELSE
var balance = 40;
var price = 50;
if(price <= balance){
    console.log('payment successful!');
    balance -= price;
}else{
    console.log('You don\'t have enough funds!');
}

var speed = 30;// ...40...70...

if(speed > 70){
    console.log("You are going too fast!");
}else if(speed < 40){
    console.log("You are going too slow!");
}else{
    console.log("Your speed is fine!");
}

***************************************************************************
                               9] Switch 
//user input
var userInput = prompt("Please input a season:");
console.log(userInput);

//transform input to lowercase letters
userInput = userInput.toLowerCase();
console.log(userInput);

switch(userInput){
    case "autumn":
        console.log("It is autumn time!");
        break;
    case "fall":
        console.log("It is fall time!");
        break;
    case "winter":
        console.log("It is winter time!");
        break;
    case "spring":
        console.log("It is spring time!");
        break;
    case "summer":
        console.log("It is summer time!");
        break;
    default:
        console.log("I do not recognise this!")
    
}
**************************************************************************************
                                  10] For loop
for(var i = 0; i < 5; i++){
    console.log(i);
}

for(var j = 7; j > -1; j--){
    console.log(Math.pow(j, 2));
}

//loop through an array
var shoppingList = ["bread", "milk", "eggs"];

//item item number: name
for(i = 0; i < shoppingList.length; i++){
    console.log("item " + i + ": " + shoppingList[i] + ".");
}

//loop through an array and change it
var numberList = [1, 2, 3];
for(i = 0; i < numberList.length; i++){
    numberList[i] += 10;
}
console.log(numberList);
****************************************************************************************
                                      11]While loop
var x = 0;
while(x < 5){
    console.log(x);
    x ++;
}
****************************************************************************************
                                      12]Do While
var x = 1;
do{
    console.log(x);
    x ++;
}while(x < 5)			
***************************************************************************************
                                      13] Function introduction
//create a function
function greeting(){
    console.log('Hello!');
}
console.log(greeting);
greeting();

//function with a parameter
function greeting2(firstname){
    console.log('Hello ' + firstname + '!');
}
var y = greeting2('Mike');
console.log(y);

//more than one parametr
function sum(a, b){
    return a + b;
}
var x = sum(3, 7);
console.log(x);

***************************************************************************************
                                     14] Function return
//returns a value
function sum(a, b){
    return a + b;
}
var x = sum(3, 7);
console.log(x);

//return a function
function greet(x){
    return function(name){
        console.log(x + " " + name + "!");
    }
}
greet('Hello')('Mike');
greet('Hi')('John');
******************************************************************************
									 15] Call by Value
//back to functions
var c = 1;

//function that adds one to a copy of x
function addOne(x){
    x ++;
}
addOne(c); //addOne(1)
console.log(c);//c is still 1 because only a copy of c was used inside the function
***********************************************************************************
                                     16] call by reference
var person1 = {
    name: "Mike",
    age: 12
}
var person2 = person1;

function addYear(person){
    person.age ++;
}

addYear(person1);
console.log(person1);
console.log(person2);

*************************************************************************************
                             17] Function statement Vs Function Expression
//function statement
console.log(sum(3,5));
function sum(a, b){
    return a + b;
}


//function expression
var greet = function(name){
    console.log("Hello " + name + "!");
};
greet("Mark");
****************************************************************************************	
                            18] Imediately invoked function expression
				IIFE means when we define function at that same time call function.Syntax of 
				IIFE is given below....
(function(){
    console.log("Hi!");
}());
****************************************************************************************							
		                    19] Built-in Function in JS
//time functions
var x = 0;
function count(){
    console.log(x);
    x ++;
    if(x == 10){
        clearInterval(counter);
    }
}
//setInterval
var counter = setInterval(count, 1000);

//setTimeout
setTimeout(function(){
   console.log("I've been waiting for 3 seconds!") 
}, 3000);

//prompt
var x = prompt("Please input your age:");
console.log(x);

//alert
window.alert("Hello!");
***************************************************************************************
                               20] Objects
//Objects literal
var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};

console.log(myPhone);
console.log(myPhone.make);
myPhone.ring();							   

*************************************************************************************
//generic object constructor
var myPhone = new Object();
//same is if wrote
//var myPhone = {};

myPhone.make = "Samsung";
myPhone.model = "Galaxy S6";
myPhone.warranty = 12;
myPhone.colour = "black";
myPhone.warranty = 0;
console.log(myPhone);
*************************************************************************************							   
							   
//objects equality
var myPhone = {
    make: "Apple",
    model: "Iphone 6"
}
var myPhone2 = {
    make: "Apple",
    model: "Iphone 6"
}
console.log(myPhone == myPhone2);

var myPhone3 = myPhone;
console.log(myPhone == myPhone3);
*****************************************************************************************
//Constructors
function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}

//let's build a phone
var myNewPhone = new phone("Apple", "Iphone 5", 12, "black");
console.log(myNewPhone);
//add a new property
myNewPhone.condition = "like new";
console.log(myNewPhone);

//let's build another phone
var myOtherPhone = new phone("Apple", "Iphone 4", 12, "black");
console.log(myOtherPhone);

//add a condition property to all phones
phone.prototype.ring = function(){
        console.log("beep beep beep!");
};

phone.prototype.condition = "new";

//let's create another phone
var myBrothersPhone = new phone("Samsung", "Galaxy S6", 12, "black");
console.log(myBrothersPhone);
console.log(myBrothersPhone.condition);
console.log(phone.prototype);
myBrothersPhone.ring();
**************************************************************************************
                           21] String Objects
var myString1 = "Javascript";
var myString2 = " is awesome!";
var myString3 = "Java";
var myString4 = "I really enjoy learning Javascript. It is so fun!";

//character at position 0 
console.log(myString1.charAt(0));

//concatenate two strings
console.log(myString1.concat(myString2));

//does myString1 include myString3?
console.log(myString1.includes(myString3));

//index of a
console.log(myString1.indexOf('a'));
console.log(myString1.lastIndexOf('a'));

//to uppercase or lowercase
console.log(myString4.toUpperCase());
console.log(myString4.toLowerCase());
*****************************************************************************************
                            22] Date objects
//current date and time
var x = new Date();
console.log(x);

//choosing a specific date and time
//year, month, date, hours, minutes, seconds, milliseconds; if 2 arguments are provided, the rest is considered 0 or 1 (day)
x = new Date(2017, 11, 15, 10);
console.log(x);

//numeric value corresponding to the current time
var y = Date.now();
console.log(y);

//return the day of the week for a specific date
var z = new Date();
console.log(z);
console.log(z.getDay());
//[0,1,2,3,4,5,6]
//[Sun,Mon,...,Sat]

//var year = prompt("Please say which year you were born:");
//var month = prompt("Please say which month you were born:");
//var day = prompt("Please say which day you were born:");
//z = new Date(year, month, day);
//var day = z.getDay();
//var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//console.log("You were born on a " + days[day]);

//create a new date object
var now = new Date(2017, 5);
console.log(now);
console.log(now.getHours());
now.setMonth(9);
now.setDate(15);
console.log(now);
******************************************************************************
                                   23] Math Objects
//PI
console.log(Math.PI);

var x = Math.random();
console.log(x);

x = Math.round(3.6);
console.log(x);

x = Math.floor(3.6);
console.log(x);

//square root
x = Math.sqrt(4);
console.log(x);

//cos
x = Math.cos(0);
console.log(x);
******************************************************************************
                                24]Array Object
var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);
console.log(typeof shoppingList);

//array constructor
var shoppingList2 = new Array("bread", " eggs", "milk");
console.log(shoppingList2);

								
var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

//add an element at the end
var x = shoppingList.push("pear");
console.log(shoppingList);

//pop an element from the end
x = shoppingList.pop();//can also shift or unshift
console.log(shoppingList);

//go to the element of index 1
//remove two elmenets starting from index 1
//replace them with grapes and strawberry
shoppingList.splice(1, 2, "grapes", "strawberry");
console.log(shoppingList);

//return two elements strating from position 0, this returns a new array
x = shoppingList.slice(0, 2);
console.log(x);

//sort an array
shoppingList.sort();
console.log(shoppingList);

//reverse an array
shoppingList.reverse();
console.log(shoppingList);								

var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

for(var i = 0; i < shoppingList.length; i ++){
    console.log(shoppingList[i]);
}

shoppingList.forEach(function(element){
    console.log(element);
});
***************************************************************************
                                   24]JSON 
   var x = {
    name:"Niraj",
    age:23,
    city:"Pune",
    address:{
       road:"H2 road",
       landmark:"near balaji mandir"
    },
    myArray:["sagar","sunil","suresh"]
     }
                            
    console.log(x); 
    console.log(typeof x);        
    var y = JSON.stringify(x);     // to convert object into json string
    console.log(y);
    console.log(typeof y);
    var z = JSON.parse(y);         // to convert string into object
    console.log(z);
    console.log(typeof z);
 *********************************************************************************
                               
                            
							
							

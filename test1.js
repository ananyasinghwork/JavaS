var number=5; // in-line comment

/* this is a
multi-line comment */

number=9;

/* the datatypes are:
undefined,null,number,boolean,string,symbol and object */

// Declaring Variables
//var can be used throughout the program
var myName="Ananya"
myName=8

//let is limited to scope
let ourName="Singh"

//cannot be changed 
const pi=3.14

/* declaration and assignment of variables*/
var a;
var b=2;
console.log(a);

//console use
a=7;
b=a;
console.log(a);

//intitalised variables
var a=5;
var b=10;
var c="This is a ";

//uninitialised variables
a=a+1;
b=b+1

//it is case-sensitive

//adding numbers
var sum=10+10;
console.log(sum);

//subtraction
var difference = 45-3;
console.log(difference);

//multiplication
var product=8*10;
console.log(product);

//division
var quotient = 66/33;
console.log(quotient);

//increment numbers
var myVar=87;
myVar= myVar+1;
console.log(myVar);

//easier way to increment numbers
var myVari=87;
myVari++;
console.log(myVari);

//decrement
var myVaria=89;
myVaria--;
console.log(myVaria);

//decimal numbers
var ourDecimal=5.7;
var myDecimal=0.009;

//multiply decimal numbers
var product1= 2.0 * 2.5;
console.log(product1);

//dividing decimal numbers
var quotient1= 5.5/5.0;
console.log(quotient1);

//remainder operation
var remainder;
remainder = 11%3;
console.log(remainder);

//augmented math operations
var a=2;
var b=4;
var c=17;

a+=5;
b-=2;
c*=10;
console.log(a);

//declare string variables
var firstName = "Anushka ";
var lastName = "Oberoi";

//quoting strings with single quotes

//escape sequences

//concatenating strings with plus operator
var lala = "This is the first. " + "This is the second.";
console.log(lala);

//length of a string
var firstNameLength=0;
var firstName="Ada";
firstNameLength=firstName.length;
console.log(firstNameLength);

var lastNameLength=0;
var lastName="Lovelace";
lastNameLength=lastName.length;
console.log(lastNameLength);

//bracket notation to find first character in string
var firstLetterOfFirstName= "";
var firstName="Ada";

firstLetterOfFirstName=firstName[0];
console.log(firstLetterOfFirstName);

//same method goes with the last name

//string immutability
var mystring = "Jello World";
mystring="Hello World"; //you cannot change individual letters

//find nth character of string
var firstName="Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

//find last character of a string
var firstName="Ada";
var lastCharacterOfFirstName = firstName[firstName.length-1];
console.log(lastCharacterOfFirstName);

//find nth to last character of a string
var firstName="Ada";
var secondToLastCharacterOfFirstName = firstName[firstName.length-2];
console.log(secondToLastCharacterOfFirstName);

//word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result = "The " + myAdjective +" " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

//store multiple values with arrays
var ourArray= ["John",23];
var myArray = ["Kaju",1];
console.log(myArray);

//nested arrays
var nestArray = [["everything",42],["universe",100]];
console.log(nestArray);

//access data of array
var ourArray=[50,60,70];
var ourData= ourArray[0];
console.log(ourData);

//modify array data
var ourArray=[23,65,89];
ourArray[1]=45;
console.log(ourArray);

//access multi-dimensional array with indexes
var myArray= [[1,2,3],[4,5,6],[7,8,9],[10,11,12],13,14];
var myData= myArray[0][0];
console.log(myData);

//push function
var ourArray=["everyone","here","is"];
ourArray.push(["happy"]);
console.log(ourArray);

//pop function removes the last array element 
var ourArray=[1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

//shift function removes first element of the array
var ourArray=[1,2,3];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

//unshift function adds an element to beginning of the array
var ourArray=[5,6,7];
var addedToOurArray = ourArray.unshift("78");
console.log(ourArray);

//shopping list demonstrating array within an array
var myList = [["cereal",2],["banana",7],["books",5],["pens"],2]

//reusable code with functions
function ourReuasableFunction() {
    console.log("Hello World");
}

ourReuasableFunction();
ourReuasableFunction();
ourReuasableFunction();

//function to add two numbers
function add(a,b) {
    console.log(a+b);
}

add(10,5);

//global scope of variables
var myGlobal =10;

function fun1() {
    oopsGlobal =5; //since there is no var given here, oopsGlobal acts as a global variable
}

function fun2() {
    var output ="";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//local variable
function myLocalScope(){
    myVar=5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

//global vs local variables 
//local variable takes precedent over the global variable when function is called
//global variable takes precedent over local variable when it is normally invoked
var outerwear=tshirt;

function myOutfit() 
{
    var outerwear=sweater;
    return outerwear;
}

console.log(myOutfit());
//output will be sweater and NOT tshirt

//return a value
function minusSeven(number) {
    return number -7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num*5;
}

console.log(timesFive(5));

//undefined value returned from a function
//since there is no return function here, no value is returned after function is called or defined
var sum=0;
function addThree() {
    sum += 3;
}

//assignment with a returned value
var changed=0;
function change(num) {
    return (num+5)/3;
}
changed = change(4);
console.log(changed);

//stand in line
function nextInLine(arr,item) {
    arr.push(item);
    return arr.shift();
}

var testArr=[1,2,3,4,5];

console.log("Before :" + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After :" + JSON.stringify(testArr));

//JSON.stringify is just a way to change array to string that can be easily printed out to the screen

//boolean values
//it has 2 values - either true or false
function Happy() {
    return true;
}

//if statements
function trueOrFalse(isItTrue) {
    if(isItTrue) {
        return "Yes, It is True";
    }
    else {
        return "No, It is False";
    }
}

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, That was False"
}

console.log(trueOrFalse(true));

//Equality operator
function checkEquality(val) {
    if(val==12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(checkEquality(10));

//strictly equal is ===
function testStrict(val){
    if(val===13)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(19)); //not equal

function testStrict(val){
    if(val===13)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(13)); //equal

function testStrict(val){
    if(val===13)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict('13')); //not equal

//logical and or operator
function testValue(val){
    if(val>=25 && val<=50){
        return "YES";
    }
    else {
        return "NO";
    }
}
console.log(testValue(10));

//golf code
var names=["Hole-in-Hole!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
function golfScore(par,strokes){
    if(strokes==1)
    {
        return names[0];
    }
    else if(strokes<=par-2){
        return names[1];
    }
    else if(strokes == par-1){
        return names[2];
    }
    else if(strokes == par)
    {
        return names[3];
    }
    else if(strokes == par+1){
        return names[4];
    }
    else if(strokes == par+2)
    {
        return names[5];
    }
    else if(par>= par+3)
    {
        return names[6];
    }
}
console.log(golfScore(5,4));
//output is "Birdie"

//switch statements
function caseInSwitch(val){
    var answer="";
    switch(val)
    {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
        default:
            return "Invalid";
            break;
    }
}

console.log(caseInSwitch(1));

//returning boolean values from functions
function isLessThan(a,b)
{
    if(a<b)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

console.log(isLessThan(10,15));

function isLessThan(a,b)
{
    return a<b;
}

console.log(isLessThan(10,15));

//objects using dot or bracket notation
var myDog = {
    "name": 'Shiro',
    "age" : 10,
    "legs" : 4,
    "tails" : 1
}

var nameofthedog = myDog.name;
var ageofthedog= myDog.age;

myDog.bark = "Bow Bow";

delete myDog.tails;

//while loops
var myArray=[];

var i=0;
while(i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//for loop
var myArray=[];

for(var i=0;i<5;i++)
{
    myArray.push(i);
}
console.log(myArray);


//iterate odd numbers using for loop
var ourArray=[];

for(var i=1;i<10;i=i+2) {
    myArray.push(i);
}
console.log(myArray);

//iterate through an array using for loop
var ourArray=[1,54,65,34];
var ourTotal=[];

for(var i=0;i<ourArray.length;i++) {
    ourTotal += ourArray; 
}
console.log(ourTotal);

//nesting for loops
function multiplyAll(arr) {
    var product=1;
    for(var i=1; i<arr.length; i++)
    {
        for(var j=0; j<arr[i].length; j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//do..while loops
var myArray = [];
var i=10;

do {
    myArray.push(i);
    i++;
}
while (i<5) 

console.log(i, myArray);

//random function
function randomFunction() {
    return Math.random();
}

console.log(randomFunction);

//random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNumber() {
    return Math.floor(Math.random());
}
console.log(randomWholeNumber());

//random number in a range
function ourrandomnumber(maxnum,minnum)
{
    return num = Math.floor(Math.random() * (maxnum - minnum +1)) + minnum;
}
console.log(ourrandomnumber(5,15));


//parseInt function
//it takes a string and returns an integer

function convertToInteger(str)
{
    return parseInt(str);
}
console.log(convertToInteger("56"));

//parseInt on binary 
//it takes a binary number as a string and returns an integer
function convertToInteger(str)
{
    return parseInt(str, 2);
}
console.log(convertToInteger("11010"));

//using the conditional operator
// condition ? statement-if-true : statement-if-false

function checkEqual(a,b) {
    if(a===b)
    {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkEqual(1,2));

//multiple ternary operator
function checkSign(num){
    return num>0 ? "positive" : num<0 ? "Negative" : "Zero";
}

console.log(checkSign(10));

//var vs let keywords
//VAR lets you change the value of variable multiple times - created GLOBALLY
//LET doesnt let you change value of variable once declared - LIMITED TO BLOCK IT WAS DECLARED AT

//const variable
//it is READ-ONLY

//array can be mutated when we use bracket notation despite using const

//object.freeze is used to make const values immutable
console.log("HERE WE HAVE COMPLETED BASIC JS");


//arrow functions
const magic = () =>  new Date();

//Events
/* there are two kinds-
1. event handler
2. event listener
*/

/* Event Handlers -
1. onclick
2. onload
3. onmouseover
4. onmouseout
5. onkeypress
6. onkeydown
7. onkeyup
*/

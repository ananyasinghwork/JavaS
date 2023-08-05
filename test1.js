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
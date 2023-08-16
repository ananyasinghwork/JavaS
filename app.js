//DOM MANIPULATION

//1. get elements by Id
const title = document.getElementById('main-heading');
console.log(title);

//2. get elements by class name
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

//3. get elements by tag name
const tagName = document.getElementsByTagName('li');
console.log(tagName);

//4. query selector
const container = document.querySelector('div');
console.log(container);

//5. query selector all
//used if there are more 'div' elements 

//styling an element
const title1 = document.querySelector('#main-heading');
title1.style.color = 'red'; //in-line styling
console.log(title1);

const listItems1 = document.querySelectorAll('.list-items');
for(i=0;i<listItems1.length;i++)
{
    listItems1[i].style.fontSize = '2rem';
}
console.log(listItems1);

//creating elements
const ul3 = document.querySelector('ul');
const li = document.createElement('li');

//adding elements
ul.append(li);

//modify text
li.innerText = 'YJHD';

//modify elements attributes
li.setAttribute('id','main-heading');
li.removeAttribute('id');

const title2 = document.querySelector('#main-heading');
console.log(title2.getAttribute('id'));

//modify elements with classes
li.classList.add('list-items');
console.log(li.classList.contains('list-items'));

//remove elements
li.remove();

//Traversing the DOM

//parent node traversal
let ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement); 

//child node traversal
let ul1 = document.querySelector('ul');
console.log(ul1.childNodes);
console.log(ul1.firstChild);
console.log(ul1.lastChild);

ul1.childNodes[1].style.background = 'blue';

console.log(ul1.children);
console.log(ul1.firstChild);
console.log(ul1.lastChild);

//sibiling node traversal
let ul2 = document.querySelector('ul');
let div = document.querySelector('div');

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
console.log(div.childNodes);
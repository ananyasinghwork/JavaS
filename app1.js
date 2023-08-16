//DOM Manipulation

//event listeners

const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I also love JavaScript');
}

buttonTwo.addEventListener("click", alertBtn);

//Mouse-over event 
const newBackgroundColor = document.querySelector('.btn-3');
function changeBackgroundColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBackgroundColor);

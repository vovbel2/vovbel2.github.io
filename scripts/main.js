var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1-tyler.jpg') {
        myImage.setAttribute('src','images/pic3-random.jpg');
    } else {
        myImage.setAttribute('src','images/pic1-tyler.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Пожалуйста введите Ваше имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
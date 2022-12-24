let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hellow world!';

/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/demo3.jpg'){
        myImage.setAttribute('src', 'images/Can-Watermelon-Go-Bad.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/demo3.jpg');
    }
}

/*
    button change username

let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    /*let myName = prompt('请输入你的名字。');
    let myName = 'xxxxx';
    localStorage.setItem('name',myName);
    myHeading.textContent = '酷哦' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else { 
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '酷哦' + storedName;
}

/*
     set a button for name change.
 
mybutton.onclick = function() {
    setUserName();
}
*/
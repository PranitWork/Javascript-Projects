

// target the classes and ID's

const notescontainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


// create one function for after refreshing the browser tab data can reload as it is using local storage

function shownotes() {
    // get the data into the local storage
    notescontainer.innerHTML = localStorage.getItem('notes');
}

// defining the function
shownotes();


// after typing the notes it will store in the local storage

function updatestorage() {
    // store data into the local storage
    localStorage.setItem('notes', notescontainer.innerHTML);
}


// after click the createBtn element it will show this
createBtn.addEventListener('click', () => {

    // creating the new p tag 
    let inputBox = document.createElement('p');

    // creating new img tag
    let img = document.createElement('img');

    // give the classname for the input box
    inputBox.className = "input-box";

    // set the attribute into the input box content editable is true
    inputBox.setAttribute("contenteditable", "true");

    // adding new image into the img tag
    img.src = "./images/delete.png";

    // adding the all inputbox and img tag into the notecontainer
    notescontainer.appendChild(inputBox).appendChild(img);
})


// click event added to the notecontainer
notescontainer.addEventListener('click', (e) => {
    // check the IMG tag if it is then
    if (e.target.tagName === 'IMG') {
        // remove the parent element means p tag
        e.target.parentElement.remove();
        updatestorage()
    }
    // else if checj p tag is available or not if it is then
    else if (e.target.tagName === 'P') {
        // select the all input-box element
        notes = document.querySelectorAll('.input-box');
        // for each loop are defining add adding new nt attribute
        notes.forEach(nt => {
            nt.onkeyup = () => {
                // update the storage in the typing because dont miss any data 
                updatestorage();
            }
        })
    }
})


// adding event listenr on ketdown 
document.addEventListener("keydown", event => {
    // user are typing the note if user can press the enter button the it will go to the new line
    if (event.key === "Enter") {
        // the is the code
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})

// localStorage.clear();


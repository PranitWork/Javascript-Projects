// define / target the inputbox button
const inputbox = document.getElementById('input-box');
// degfine / target the list container
const listcontainer = document.getElementById('list-container');

// creating the add task function for adding the task into the todo list
function addTask() {
    // check the to do list empty or not
    // if empty show the alert message to the user
    if (inputbox.value === '') {
        alert('you must write sometihng')
    }
    // else add the task into the todolist
    else {
        // creating the li element
        let li = document.createElement('li');
        // storing the data of the input box into the li
        li.innerHTML = inputbox.value;
        // display the data into the user using list container
        listcontainer.appendChild(li);

        // creting the arrow (X) for the right side of the task
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        // add the arrow (X) into the li
        li.appendChild(span);
    }
    // after clicking the add button the inputbox syntax can clear the input box
    inputbox.value = "";

    // define the save data function
    savedata();
}



// creating the function for if user want complete or cancel the task or delete the task
listcontainer.addEventListener('click', function (e) {
    // check the task in the list container is available or not  
    if (e.target.tagName === "LI") {
        // if available then user can click  that task the it will show the checked button color
        e.target.classList.toggle("checked");

        // define the save data function
        savedata()
    }
    // check the arrow (X) are available or not if it is then
    else if (e.target.tagName === "SPAN") {
        // your parent element can click the remove that task into the todolist
        e.target.parentElement.remove();

        // define the save data function
        savedata()
    }
});


// save data into the browser local storage
function savedata() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

// after refresing or re open the tab save data can open and show for the user
function showtask() {
    listcontainer.innerHTML = localStorage.getItem('data');
}
// show task function are define
showtask();
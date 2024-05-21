
// store the password id into th password box 
const passwordBox = document.getElementById("password");

// this is the password length set degining th password length 

const lenght = 12;

// degine the all type of charector number symbol
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = '1234567890';
const symbol = "@!#$%^&*()_-|\?/."

// adding the all charectors numbers symbol into the allchars const veriable
const allChars = uppercase + lowercase + number + symbol;
// console.log(allChars)

// create one create password function
function createpassword() {
    // create one password variable for storing the password
    let password = "";

    // defining the math.random() function the select any random numbers to the password
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * uppercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    // while length is grather the the password length then print
    while (lenght > password.length) {
        // this is also use the math.random() function for allchars veriable to ganarate the password combination
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // storing the passworBox value into the password
    passwordBox.value = password;
}

// after ganrating the password it will copy thats why this function are created
function copyPassword() {

    // the line can select the password
    passwordBox.select();

    // this statement can copy the password
    document.execCommand("copy");
}
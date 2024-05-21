
// target the id's andstore the value
let userInput = document.getElementById('date');
let result = document.getElementById('result');

// user only select previus and current date not the feuture date this is the use of that line
userInput.max = new Date().toISOString().split('T')[0];


// created one age acalculate function
function calculateAge() {
    // soting the user input inth bithdate 
    let birthDate = new Date(userInput.value);

    // store all user input in the differnt veriables d1,m1,y1
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // current date 
    let today = new Date();
    // store todays date into the d2,m2,y2
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // store all calulation and result into the d3,m3,y3
    let d3, m3, y3;

    // statements to calculate the age
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;

    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDayInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    // store the all result into the result 
    result.innerHTML = `You Are <span> ${y3} </span> Years <span> ${m3} </span> Months and  <span> ${d3} </span> Days Old`;
}

// creating the function get day in month
function getDayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
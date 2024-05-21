
// api key declare
const api_url = "https://api.quotable.io/random";

// target the id's
const quote = document.getElementById('quote');
const author = document.getElementById('author');


// create one async awaite function for getQuote
async function getquote(url) {
    // fetch the data and waite for the response
    const response = await fetch(url);
    // store the response into the data
    var data = await response.json();
    // console.log(data)
    // show the QUOTE and QUTHOR name into the screen 
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

// declare the function 
getquote(api_url);


// this function are used to open the twitter
function tweet() {
    //  added twitter link and Quote athor name and define that window height or width
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by" + author.innerHTML, "tweet window", "width:600, height=300")
}
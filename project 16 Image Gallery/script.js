

// define id's and classes in the html files
let scrollContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


// this function is mouse wheel fuction for scrolling images
scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault();

    // this line can scroll the images one by one 
    scrollContainer.scrollLeft += evt.deltaY;

    // this line can give the smooth transition
    scrollContainer.style.scrollBehavior = "auto";

});

// the function is the next btn icon function
nextBtn.addEventListener('click', () => {

    // after clicking the icon images will be scroll 
    scrollContainer.scrollLeft += 900;
    // this line are provide the smooth transition
    scrollContainer.style.scrollBehavior = "smooth";
});

// the function is the back btn icon function
backBtn.addEventListener('click', () => {
    // after clicking the icon images will be scroll 

    scrollContainer.scrollLeft -= 900;
    // this line are provide the smooth transition
    scrollContainer.style.scrollBehavior = "smooth";
});